import { useTRPC } from '@/trpc/client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { set, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { meetingInsertSchema } from '../schema/schema';
import { useState } from 'react';
import { CommandSelect } from '@/components/common/CommandSelect';
import AgentsDialogs from '../../agents/ui/AgentsDailogs';
import { GeneratedAvatar } from '@/components/common/generated-avatar';

interface Props {
  onSuccess?: (id?: string) => void;
  onCancel?: () => void;
  initialValues?: any;
};

const MeetingForm = ({ initialValues, onCancel, onSuccess }: Props) => {

  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const [openNewAgentDialog, setOpenNewAgentDialog] = useState(false);
  const [agentSearch, setAgentSearch] = useState('');

  const agent = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch
    })
  );

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
    <>
      <AgentsDialogs open={openNewAgentDialog} onOpenChange={setOpenNewAgentDialog} />

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

          <FormField
            name='agentId'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CommandSelect
                    options={(agent.data?.items ?? []).map((agent) => ({
                      id: agent.id,
                      value: agent.id,
                      children: (
                        <div className='flex items-center gap-x-2'>
                          <GeneratedAvatar
                            seed={agent.name}
                            variant='botttsNeutral'
                            className='border size-6'
                          />
                          <span>{agent.name}</span>
                        </div>
                      )
                    }))}
                    onSelect={field.onChange}
                    onSearch={setAgentSearch}
                    value={field.value}
                    placeholder='Select an agent'
                  />
                </FormControl>
                <FormDescription>
                  Not found what you are looking for?{' '}
                  <button
                    type='button'
                    className='text-primary hover:underline'
                    onClick={() => setOpenNewAgentDialog(true)}
                  >
                    Click New Agent
                  </button>
                </FormDescription>
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
    </>
  );

};

export default MeetingForm;