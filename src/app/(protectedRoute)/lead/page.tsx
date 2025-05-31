import Pipeline from '@/components/ReusableComponents/Logo/PipelineIcon';
import PageHeader from '@/components/ReusableComponents/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User, Webcam } from 'lucide-react';
import React from 'react';

type Props = {};

const LeadsPage = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <PageHeader
        leftIcon={<Webcam className='w-3 h-3' />}
        mainIcon={<User className='w-12 h-12' />}
        rightIcon={<Pipeline className='w-3 h-3' />}
        heading='The home to all your customers'
        placeholder='Search for a customer'
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-sm text-muted-foreground'>
              Name
            </TableHead>
            <TableHead className='text-sm text-muted-foreground'>
              Email
            </TableHead>
            <TableHead className='text-sm text-muted-foreground'>
              Phone
            </TableHead>
            <TableHead className='text-right text-muted-foreground'>
              Tags
            </TableHead>
            {/* <TableBody>
              {leadData?.map((lead, idx) => (
                <TableRow key={idx} className='border-0' >
                  <TableCell className='font-medium'>{lead?.name}</TableCell>
                  <TableCell>{lead?.email}</TableCell>
                  <TableCell>{lead?.phone}</TableCell>
                  <TableCell className='text-right'>
                    {lead?.tags?.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant={'outline'}>
                        {tag}
                      </Badge>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default LeadsPage;