import { getWebinarAttendance } from '@/actions/attendence';
import Pipeline from '@/components/ReusableComponents/Logo/PipelineIcon';
import PageHeader from '@/components/ReusableComponents/PageHeader';
import { HomeIcon, User } from 'lucide-react';
import React from 'react';
import PipelineLayout from './_components/PipelineLayout';
import { formatColumnTitle } from './_components/utils';
import { AttendedTypeEnum } from '@prisma/client';

type Props = {
  params: Promise<{
    webinarId: string;
  }>;
};

const PipelinePage = async ({ params }: Props) => {
  const { webinarId } = await params;

  const pipelineData = await getWebinarAttendance(webinarId);

  if (!pipelineData.success || !pipelineData.data) {
    return (
      <div className='text-3xl h-[400px] flex justify-center items-center'>
        No pipeline data found
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col gap-8'>
      <PageHeader
        leftIcon={<User className='w-4 h-4' />}
        mainIcon={<Pipeline className='w-12 h-12' />}
        rightIcon={<HomeIcon className='w-3 h-3' />}
        heading='Keep track of all your customers'
        placeholder='Search name, emails or Tags'
      />

      <div className='flex overflow-x-auto pb-4 gap-4 md:gap-6'>
        {Object.entries(pipelineData.data).map(([columnType, columnData]) => (
          <PipelineLayout
            key={columnType}
            tittle={formatColumnTitle(columnType as AttendedTypeEnum)}
            count={columnData.count}
            users={columnData.users}
            tags={pipelineData.webinarTags}
          />
        ))}
      </div>
    </div>
  );
};

export default PipelinePage;