"use client";

import { Badge } from "@/components/ui/badge";
import { MeetingGetMany } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  CircleCheck,
  CircleX,
  ClockArrowUp,
  ClockFading,
  CornerDownRightIcon,
  Loader,
} from "lucide-react";
import { format } from "date-fns";
import { cn, formatDuration } from "@/lib/utils";
import { GeneratedAvatar } from "@/components/common/generated-avatar";



const statusIconMap = {
  upcoming: ClockArrowUp,
  active: Loader,
  completed: CircleCheck,
  processing: Loader,
  canceled: CircleX
};

const statusColorMap = {
  upcoming: "bg-yellow-500/20 text-yellow-800 border-yellow-800/5",
  active: "bg-blue-500/20 text-blue-800 border-blue-800/5",
  completed: "bg-emerald-500/20 text-emerald-800 border-emerald-800/5",
  processing: "bg-rose-500/20 text-rose-800 border-rose-800/5",
  canceled: "bg-gray-500/20 text-gray-800 border-gray-800/5"
};


export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Meeting Name",

    cell: ({ row }) => (
      <div className="flex flex-col gap-y-1">
        <span className="font-semibold capitalize">{row.original.name}</span>


        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <CornerDownRightIcon className="size-3 text-muted-foreground" />
            <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">
              {row.original.agent.name}
            </span>
          </div>
          <GeneratedAvatar
            className="size-4"
            seed={row.original.agent.name}
            variant={"botttsNeutral"}
          />
          <span className="text-sm text-muted-foreground">
            {row.original.startedAt ? format(row.original.startedAt, 'MMM dd') : 'N/A'}
          </span>
        </div>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const Icon = statusIconMap[row.original.status as keyof typeof statusColorMap];

      return (
        <Badge
          variant="outline"
          className={cn(
            'capitalize [&>svg]:size-4 text-muted-foreground',
            statusColorMap[row.original.status as keyof typeof statusColorMap]
          )}
        >
          <Icon
            className={cn(
              row.original.status === 'processing' && 'animate-spin',
            )}
          />
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'duration',
    header: 'Duration',
    cell: ({ row }) => (
      <Badge>
        <ClockFading className="text-primary-foreground" />
        {row.original.duration ? formatDuration(row.original.duration) : 'No duration'}
      </Badge>
    )
  }

];