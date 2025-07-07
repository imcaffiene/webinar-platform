import { GeneratedAvatar } from '@/components/common/generated-avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MeetingGetOne } from '@/lib/types';
import { formatDuration } from '@/lib/utils';
import { format } from 'date-fns';
import { BookOpenText, ClockFadingIcon, FileText, FileVideo, SparkleIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Markdown from 'react-markdown';


interface Props {
  data: MeetingGetOne;
};

const CompletedState = ({ data }: Props) => {
  return (
    <div className='flex flex-col gap-y-4'>
      <Tabs defaultValue='summry'>
        <div className='bg-white rounded-lg border px-3'>
          <ScrollArea>
            <ScrollBar orientation='horizontal' />
            <TabsList className='p-0 bg-background justify-start rounded-none h-13'>
              <TabsTrigger
                className='text-muted-foreground rounded-none bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-accent-foreground h-full hover:text-accent-foreground'
                value='summary'
              >
                <BookOpenText />
                Summary
              </TabsTrigger>

              <TabsTrigger
                className='text-muted-foreground rounded-none bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-accent-foreground h-full hover:text-accent-foreground'
                value='transcript'
              >
                <FileText />
                Transcript
              </TabsTrigger>

              <TabsTrigger
                className='text-muted-foreground rounded-none bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-accent-foreground h-full hover:text-accent-foreground'
                value='recording'
              >
                <FileVideo />
                Recording
              </TabsTrigger>

              <TabsTrigger
                className='text-muted-foreground rounded-none bg-background data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary data-[state=active]:text-accent-foreground h-full hover:text-accent-foreground'
                value='chat'
              >
                <Sparkles />
                Ask AI
              </TabsTrigger>
            </TabsList>
          </ScrollArea>
        </div>

        <TabsContent value='recording'>
          <div className='bg-white rounded-lg border px-4 py-5'>
            <video
              src={data.recordingUrl!}
              className='w-full rounded-lg'
              controls
            />
          </div>
        </TabsContent>

        <TabsContent value='summary'>
          <div className='bg-white rounded-lg border'>
            <div className='px-4 py-5 gap-y-5 flex flex-col col-span-5'>
              <h2 className='text-2xl font-medium capitalize'>{data.name}</h2>
              <div className='flex gap-x-2 items-center'>
                <Link
                  href={`/agents/${data.agent.id}`}
                  className='flex items-center gap-x-2 underline underline-offset-4 capitalize'
                >
                  <GeneratedAvatar
                    variant='botttsNeutral'
                    seed={data.agent.name}
                    className='size-5'
                  />
                  {data.agent.name}
                </Link>{" "}
                <p>{data.startedAt ? format(data.startedAt, 'PPP') : ""}</p>
              </div>
              <div className='flex gap-x-2 items-center'>
                <SparkleIcon className='size-4' />
                <p>General Summary</p>
              </div>
              <Badge
                variant='outline'
                className='flex items-center gap-x-2 [&>svg]:size-4'
              >
                <ClockFadingIcon className='text-blue-600' />
                {data.duration ? formatDuration(data.duration) : "No duration"}
              </Badge>
              <div>
                <Markdown components={{
                  h1: (props) => (
                    <h1 className='text-2xl font-medium mb-6' {...props} />
                  ),
                  h2: (props) => (
                    <h2 className='text-xl font-medium mb-6' {...props} />
                  ),
                  h3: (props) => (
                    <h3 className='text-lg font-medium mb-6' {...props} />
                  ),
                  h4: (props) => (
                    <h4 className='text-base font-medium mb-6' {...props} />
                  ),
                  p: (props) => (
                    <p className='mb-6 leading-relaxed' {...props} />
                  ),
                  ul: (props) => (
                    <ul className='list-disc list-inside mb-6' {...props} />
                  ),
                  ol: (props) => (
                    <ol className='list-decimal list-inside mb-6' {...props} />
                  ),
                  li: (props) => (
                    <li className='mb-2' {...props} />
                  ),
                  strong: (props) => (
                    <strong className='font-semibold' {...props} />
                  ),
                  code: (props) => (
                    <code className='bg-gray-100 px-1 py-0.5 rounded' {...props} />
                  ),
                  blockquote: (props) => (
                    <blockquote className='border-l-4 border-gray-300 pl-4 italic mb-6' {...props} />
                  ),
                }}>
                  {data.summary}
                </Markdown>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompletedState;