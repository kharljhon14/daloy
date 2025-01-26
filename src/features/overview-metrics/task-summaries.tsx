import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FaCheck, FaRegClock, FaRegCopy } from 'react-icons/fa';

export default function TaskSummaries() {
  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 max-w-4xl">
      <Card className="h-52 flex-1 flex items-start justify-center flex-col border-2 border-purple-800 bg-purple-50 max-w-xs relative shadow-md w-full mx-auto">
        <div className="absolute right-0 inset-y-0">
          <Image
            width={180}
            height={180}
            src="/calendar.svg"
            alt="calendar"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-gray-600 font-medium text-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl">Task Left</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center">
          <span className="text-6xl font-semibold text-gray-800">4</span>
        </CardContent>
      </Card>

      <Card className="flex-1 h-52">
        <CardHeader className="h-full">
          <div className="flex w-full h-full items-center justify-between">
            <div className="flex flex-col gap-y-3">
              <div className="rounded-full p-3 bg-green-100 flex items-center justify-center w-fit">
                <FaCheck className="text-green-500 text-2xl" />
              </div>
              <p className="text-gray-600 font-medium text-sm">Done</p>
              <span className="text-4xl font-semibold text-gray-800">12</span>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="rounded-full p-3 bg-purple-200 flex items-center justify-center w-fit">
                <FaRegClock className="text-purple-500 text-2xl" />
              </div>
              <p className="text-gray-600 font-medium text-wrap text-sm">In Progress</p>
              <span className="text-4xl font-semibold text-gray-800">4</span>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="rounded-full p-3 bg-yellow-100 flex items-center justify-center w-fit">
                <FaRegCopy className="text-yellow-500 text-2xl" />
              </div>
              <p className="text-gray-600 font-medium text-sm">In Queue</p>
              <span className="text-4xl font-semibold text-gray-800">12</span>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
