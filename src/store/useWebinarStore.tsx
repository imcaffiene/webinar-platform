import { validateAdditionalInfo, validateBasicInfo, validateCTA, ValidationErrors } from '@/lib/types';
import { CtaTypeEnum } from '@prisma/client';
import { create } from 'zustand';

/**
 * Type definitions for the webinar form state
 * Defines the structure of form data for:
 * - Basic info (webinar details)
 * - CTA (call-to-action section)
 * - Additional info (settings and options)
 */
export type WebinarFormState = {
  basicInfo: {
    webinarName?: string;
    description?: string;
    date?: Date;
    time?: string;
    timeFormat?: 'AM' | 'PM';
  };
  cta: {
    ctaLabel?: string;
    tags?: string[];
    ctaType: CtaTypeEnum;  // Required field for CTA type
    aiAgent?: string;
    priceId?: string;
  };
  additionalInfo: {
    lockChat?: boolean;
    couponCode?: string;
    couponEnabled?: boolean;
  };
};

/**
 * Validation state structure
 * Tracks validation status and errors for each form section
 */
type ValidationState = {
  basicInfo: {
    valid: boolean;
    errors: ValidationErrors;
  };
  cta: {
    valid: boolean;
    errors: ValidationErrors;
  };
  additionalInfo: {
    valid: boolean;
    errors: ValidationErrors;
  };
};

/**
 * Main store interface
 * Contains:
 * - UI state (modals, completion status)
 * - Form data and validation state
 * - Methods to update form fields and validate sections
 */
type WebinarStore = {
  // Modal control
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;

  // Form completion status
  isComplete: boolean;
  setComplete: (complete: boolean) => void;

  // Submission state
  isSubmitting: boolean;
  setSubmitting: (submitting: boolean) => void;

  // Form data and validation
  formData: WebinarFormState;
  validation: ValidationState;

  // Field update methods
  updateBasicInfoField: <K extends keyof WebinarFormState['basicInfo']>(
    field: K,
    value: WebinarFormState['basicInfo'][K]
  ) => void;

  updateCtaField: <K extends keyof WebinarFormState['cta']>(
    field: K,
    value: WebinarFormState['cta'][K]
  ) => void;

  updateAditionalInfoField: <K extends keyof WebinarFormState['additionalInfo']>(
    field: K,
    value: WebinarFormState['additionalInfo'][K]
  ) => void;

  // Validation methods
  validationStep: (stepId: keyof WebinarFormState) => boolean;
  getStepValidationErrors: (stepId: keyof WebinarFormState) => ValidationErrors;

  // Reset form to initial state
  resetForm: () => void;
};

/**
 * Initial form state values
 * Default values for all form fields when first loaded
 */
const initialState: WebinarFormState = {
  basicInfo: {
    webinarName: '',
    description: '',
    date: undefined,
    time: '',
    timeFormat: 'AM',
  },
  cta: {
    ctaLabel: '',
    tags: [],
    ctaType: 'BOOK_A_CALL',  // Default CTA type
    aiAgent: '',
    priceId: '',
  },
  additionalInfo: {
    lockChat: false,
    couponCode: '',
    couponEnabled: false,
  },
};

/**
 * Initial validation state
 * All sections start as invalid (except additionalInfo which is optional)
 */
const initialValidationState: ValidationState = {
  basicInfo: {
    valid: false,
    errors: {},
  },
  cta: {
    valid: false,
    errors: {},
  },
  additionalInfo: {
    valid: true,  // Typically optional fields
    errors: {},
  },
};

/**
 * Main Zustand store implementation
 * Creates a global state manager for the webinar form
 */
export const useWebinarStore = create<WebinarStore>((set, get) => ({
  // Modal state management
  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),

  // Form completion state
  isComplete: false,
  setComplete: (complete) => set({ isComplete: complete }),

  // Submission loading state
  isSubmitting: false,
  setSubmitting: (submitting) => set({ isSubmitting: submitting }),

  // Form data state
  formData: initialState,
  validation: initialValidationState,

  /**
   * Updates basic info field and validates immediately
   * @param field - Field name to update
   * @param value - New field value
   */
  updateBasicInfoField: (field, value) => {
    set((state) => {
      const newBasicInfo = { ...state.formData.basicInfo, [field]: value };
      const validationResult = validateBasicInfo(newBasicInfo);

      return {
        formData: { ...state.formData, basicInfo: newBasicInfo },
        validation: {
          ...state.validation,
          basicInfo: validationResult
        }
      };
    });
  },

  /**
   * Updates CTA field and validates immediately
   * @param field - Field name to update
   * @param value - New field value
   */
  updateCtaField: (field, value) => {
    set((state) => {
      const newCta = { ...state.formData.cta, [field]: value };
      const validationResult = validateCTA(newCta);

      return {
        formData: { ...state.formData, cta: newCta },
        validation: {
          ...state.validation,
          cta: validationResult
        }
      };
    });
  },

  /**
   * Updates additional info field and validates immediately
   * Note: Method name has typo (Aditional) kept for backward compatibility
   * @param field - Field name to update
   * @param value - New field value
   */
  updateAditionalInfoField(field, value) {
    set((state) => {
      const newAdditionalInfo = { ...state.formData.additionalInfo, [field]: value };
      const validationResult = validateAdditionalInfo(newAdditionalInfo);

      return {
        formData: { ...state.formData, additionalInfo: newAdditionalInfo },
        validation: {
          ...state.validation,
          additionalInfo: validationResult
        }
      };
    });
  },

  /**
   * Validates a specific form section
   * @param stepId - Section to validate (basicInfo, cta, or additionalInfo)
   * @returns boolean indicating if the section is valid
   */
  validationStep: (stepId: keyof WebinarFormState) => {
    const { formData } = get();
    let validationResult;

    // Validate the appropriate section
    switch (stepId) {
      case 'basicInfo':
        validationResult = validateBasicInfo(formData.basicInfo);
        break;
      case 'cta':
        validationResult = validateCTA(formData.cta);
        break;
      case 'additionalInfo':
        validationResult = validateAdditionalInfo(formData.additionalInfo);
        break;
    }

    // Update validation state
    set((state) => ({
      validation: {
        ...state.validation,
        [stepId]: validationResult
      }
    }));

    return validationResult.valid;
  },

  /**
   * Gets validation errors for a specific section
   * @param stepId - Section to get errors for
   * @returns ValidationErrors object for the section
   */
  getStepValidationErrors: (stepId: keyof WebinarFormState) => {
    return get().validation[stepId].errors;
  },

  /**
   * Resets the entire form to initial state
   * Clears all fields and validation states
   */
  resetForm: () => set({
    formData: initialState,
    validation: initialValidationState,
    isComplete: false,
    isSubmitting: false,
  })
}));