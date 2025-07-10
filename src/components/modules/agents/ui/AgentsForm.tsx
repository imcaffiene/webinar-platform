import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { agentInsertSchema } from '../schema/schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { GeneratedAvatar } from '@/components/common/generated-avatar';
import { useRouter } from 'next/navigation';

interface Props {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: any;
};

const AgentsForm = ({ initialValues, onCancel, onSuccess }: Props) => {

  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const createAgents = useMutation(
    trpc.agents.create.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
        );
        await queryClient.invalidateQueries(
          trpc.premium.getFreeUsage.queryOptions()
        );
        onSuccess?.();
      },
      onError: (err) => {
        toast.error(err.message);

        if (err.data?.code === "FORBIDDEN") {
          router.push("/upgrade");
        }
      }
    })
  );

  const updateAgents = useMutation(
    trpc.agents.update.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
        );

        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.agents.getOne.queryOptions({ id: initialValues.id })
          );
        }
        onSuccess?.();
      },
      onError: (err) => {
        toast.error(err.message);
      }
    })
  );


  const form = useForm<z.infer<typeof agentInsertSchema>>({
    resolver: zodResolver(agentInsertSchema),
    defaultValues: {
      name: initialValues?.name || '',
      instructions: initialValues?.instructions || '',
    }
  });

  const isEdit = !!initialValues?.id;
  const isPending = createAgents.isPending || updateAgents.isPending;

  const onSubmit = (value: z.infer<typeof agentInsertSchema>) => {
    if (isEdit) {
      updateAgents.mutate({ ...value, id: initialValues.id });
    } else {
      createAgents.mutate(value);
    }
  };

  return (
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <GeneratedAvatar
          seed={form.watch('name')}
          variant='botttsNeutral'
          className='border size-16'
        />
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
          name='instructions'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea {...field} placeholder='Instructions' />
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

export default AgentsForm;