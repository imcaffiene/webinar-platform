import { ValidationErrors } from '@/lib/types';
import { CtaTypeEnum } from '@prisma/client';
import { create } from 'zustand';

export type WebinarFormState = {
  basicInfo: {
    webinarName?: string;
    description?: string;
    date?: string;
    time?: string;
    timeFormat?: 'AM' | 'PM';
  };
  cta: {
    ctaLabel?: string;
    tags?: string[];
    ctatype?: CtaTypeEnum;
    aiAgent?: string;
    priceId?: string;
  };
  additionalInfo: {
    lockChat?: boolean;
    cuponCode?: string;
    cuponEnabled?: boolean;
  };
};

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

type WebinarStore = {
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;

  isComplete: boolean;
  setComplete: (complete: boolean) => void;

  isSubmitting: boolean;
  setSubmitting: (submitting: boolean) => void;

  formData: WebinarFormState;
  validation: ValidationState;
};

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
    ctatype: 'BOOK_A_CALL',
    aiAgent: '',
    priceId: '',
  },
  additionalInfo: {
    lockChat: false,
    cuponCode: '',
    cuponEnabled: false,
  },
};

export const useWebinarStore = create<WebinarStore>((set) => ({

  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),

  isComplete: false,
  setComplete: (complete) => set({ isComplete: complete }),

  isSubmitting: false,
  setSubmitting: (submitting) => set({ isSubmitting: submitting }),

  formData: initialState,
}));