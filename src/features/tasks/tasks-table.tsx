'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export default function TasksTable() {
  return (
    <div className="">
      <div className="bg-white rounded-2xl p-4 border">
        <Table className="overflow w-[60rem] lg:w-full overflow-hidden">
          <TableHeader>
            <TableRow className="h-16 hover:bg-white">
              <TableHead>
                <span>Team Member</span>
              </TableHead>
              <TableHead>
                <span>Task</span>
              </TableHead>
              <TableHead>
                <span>Status</span>
              </TableHead>
              <TableHead>
                <span>Priority</span>
              </TableHead>
              <TableHead>
                <span>Last Update</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="h-16 hover:bg-purple-50">
              <TableCell>Kharl</TableCell>
              <TableCell>Landing page</TableCell>
              <TableCell>In Queue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Yesterday</TableCell>
            </TableRow>
            <TableRow className="h-16 bg-gray-100 hover:bg-purple-50">
              <TableCell>Kharl</TableCell>
              <TableCell>Landing page</TableCell>
              <TableCell>In Queue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Yesterday</TableCell>
            </TableRow>
            <TableRow className="h-16 hover:bg-purple-50">
              <TableCell>Kharl</TableCell>
              <TableCell>Landing page</TableCell>
              <TableCell>In Queue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Yesterday</TableCell>
            </TableRow>
            <TableRow className="h-16 bg-gray-100 hover:bg-purple-50">
              <TableCell>Kharl</TableCell>
              <TableCell>Landing page</TableCell>
              <TableCell>In Queue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Yesterday</TableCell>
            </TableRow>
            <TableRow className="h-16 hover:bg-purple-50">
              <TableCell>Kharl</TableCell>
              <TableCell>Landing page</TableCell>
              <TableCell>In Queue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Yesterday</TableCell>
            </TableRow>
            <TableRow className="h-16 bg-gray-100 hover:bg-purple-50">
              <TableCell>Kharl</TableCell>
              <TableCell>Landing page</TableCell>
              <TableCell>In Queue</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Yesterday</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
