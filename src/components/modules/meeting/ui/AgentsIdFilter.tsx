import { CommandSelect } from '@/components/common/CommandSelect';
import { GeneratedAvatar } from '@/components/common/generated-avatar';
import { useMeetingsFilter } from '@/hooks/use-filter';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

type Props = {};

export const AgentsIdFilter = (props: Props) => {

  const [agentSearch, setAgentSearch] = useState('');
  const [filter, setFilter] = useMeetingsFilter();

  const trpc = useTRPC();

  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch
    })
  );

  return (
    <CommandSelect
      className='h-9'
      placeholder='Filter by Agent'
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className='flex items-center gap-x-2'>
            <GeneratedAvatar
              seed={agent.name}
              variant='botttsNeutral'
              className='size-4'
            />
            {agent.name}
          </div>
        )
      }))}
      onSelect={(value) => setFilter({ agentId: value })}
      onSearch={setAgentSearch}
      value={filter.agentId ?? ''}
    />
  );
}

