import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { meetingInsertSchema } from '../schema/schema';

interface Props {
  onSuccess?: (id?: string) => void;
  onCancel?: () => void;
  initialValues?: any;
};

const MeetingForm = ({ initialValues, onCancel, onSuccess }: Props) => {

  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const createMeetings = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );
        onSuccess?.(data.id);
      },
      onError: (err) => {
        toast.error(err.message);
      }
    })
  );

  const updateMeetings = useMutation(
    trpc.meetings.update.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );

        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.meetings.getOne.queryOptions({ id: initialValues.id })
          );
        }
        onSuccess?.();
      },
      onError: (err) => {
        toast.error(err.message);
      }
    })
  );


  const form = useForm<z.infer<typeof meetingInsertSchema>>({
    resolver: zodResolver(meetingInsertSchema),
    defaultValues: {
      name: initialValues?.name || '',
      agentId: initialValues?.agentId || '',
    }
  });

  const isEdit = !!initialValues?.id;
  const isPending = createMeetings.isPending || updateMeetings.isPending;

  const onSubmit = (value: z.infer<typeof meetingInsertSchema>) => {
    if (isEdit) {
      updateMeetings.mutate({ ...value, id: initialValues.id });
    } else {
      createMeetings.mutate(value);
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder='Name' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <div className='flex justify-between gap-x-2'>
          {onCancel && (
            <Button
              variant='ghost'
              disabled={isPending}
              type='button'
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          )}

          <Button disabled={isPending} type='submit'>
            {isEdit ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default MeetingForm;