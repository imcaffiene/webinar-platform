import { GeneratedAvatar } from '@/components/common/generated-avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MeetingGetOne } from '@/lib/types';
import { formatDuration } from '@/lib/utils';
import { format } from 'date-fns';
import { AlertCircle, BookOpenText, CalendarDays, Clock, FileText, FileVideo, Lightbulb, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Markdown from 'react-markdown';
import { Transcript } from './Transcript';
import ChatProvider from './ChatProvider';


interface Props {
  data: MeetingGetOne;
};

const CompletedState = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue="summary">
        {/* Tab Navigation */}
        <div className="bg-card rounded-lg border">
          <ScrollArea className="w-full" type="auto">
            <TabsList className="bg-transparent p-0 h-14 w-full justify-start gap-0">
              {[
                { value: "summary", icon: <BookOpenText className="h-4 w-4" />, label: "Summary" },
                { value: "transcript", icon: <FileText className="h-4 w-4" />, label: "Transcript" },
                { value: "recording", icon: <FileVideo className="h-4 w-4" />, label: "Recording" },
                { value: "chat", icon: <Sparkles className="h-4 w-4" />, label: "Ask AI" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="
                px-6 py-4 h-full rounded-none border-b-2 border-transparent 
                text-muted-foreground font-medium
                hover:text-foreground hover:bg-muted/50
                data-[state=active]:border-primary data-[state=active]:text-foreground
                transition-colors duration-200
                flex items-center gap-2
              "
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>
        </div>

        {/* Tab Contents */}
        <div className="space-y-6">
          {/* Transcript Tab */}
          <TabsContent value="transcript" className="mt-0">
            <Transcript meetingId={data.id} />
          </TabsContent>

          {/* Recording Tab */}
          <TabsContent value="recording" className="mt-0">
            <div className="bg-card rounded-lg border p-6">
              <video
                src={data.recordingUrl!}
                className="w-full rounded-lg shadow-sm"
                controls
              />
            </div>
          </TabsContent>

          {/* Chat Tab */}
          <TabsContent value="chat" className="mt-0">
            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">Ask AI About This Meeting</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Analyze the summary, transcript, and recording to get answers about this meeting.
                  </p>
                </div>

                {/* Tips & Guidelines */}
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                      How to get the best results
                    </h4>
                    <ul className="space-y-2 pl-1 text-sm">
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Ask specific questions like <span className="font-medium">"What was decided about the budget?"</span></span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Request action items: <span className="font-medium">"What are the next steps?"</span></span>
                      </li>
                      <li className="flex gap-2">
                        <span>•</span>
                        <span>Get summaries: <span className="font-medium">"Key takeaways about the project timeline"</span></span>
                      </li>
                    </ul>
                  </div>

                  {/* Beta Notice */}
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800/50">
                    <AlertCircle className="h-4 w-4 mt-0.5 text-yellow-600 dark:text-yellow-400" />
                    <div className="space-y-1 text-sm">
                      <p className="font-medium text-yellow-800 dark:text-yellow-200">Beta Feature Notice</p>
                      <p className="text-yellow-700 dark:text-yellow-300">
                        This AI assistant is experimental. While we strive for accuracy, please verify critical information with the original meeting materials.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Interface */}
                <div className="space-y-4 rounded-lg border">
                  <ChatProvider
                    meetingId={data.id}
                    meetingName={data.name}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Summary Tab */}
          <TabsContent value="summary" className="mt-0">
            <div className="bg-card rounded-lg border overflow-hidden">
              <div className="p-6 space-y-6">
                {/* Meeting Header */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">{data.name}</h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <Link
                      href={`/agents/${data.agent.id}`}
                      className="flex items-center gap-2 hover:text-foreground transition-colors"
                    >
                      <GeneratedAvatar
                        variant="botttsNeutral"
                        seed={data.agent.name}
                        className="size-5"
                      />
                      <span>{data.agent.name}</span>
                    </Link>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {data.startedAt ? format(data.startedAt, 'PPP') : "No date"}
                    </div>

                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {data.duration ? formatDuration(data.duration) : "No duration"}
                    </Badge>
                  </div>
                </div>

                {/* Summary Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="h-4 w-4" />
                    <h3 className="font-medium">Meeting Summary</h3>
                  </div>

                  <div className="prose prose-sm max-w-none">
                    <Markdown
                      components={{
                        h1: ({ children }) => <h1 className="text-2xl font-semibold mt-6 mb-4">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-xl font-semibold mt-5 mb-3">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-lg font-medium mt-4 mb-2">{children}</h3>,
                        p: ({ children }) => <p className="text-base leading-relaxed mb-4">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="mb-1">{children}</li>,
                        code: ({ children }) => (
                          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                            {children}
                          </code>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-muted pl-4 italic text-muted-foreground my-4">
                            {children}
                          </blockquote>
                        ),
                      }}
                    >
                      {data.summary}
                    </Markdown>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CompletedState;