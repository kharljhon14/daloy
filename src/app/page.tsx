import TaskSummaries from '@/features/overview-metrics/task-summaries';
import TasksTable from '@/features/tasks/tasks-table';

export default function Home() {
  return (
    <>
      <TaskSummaries />
      <TasksTable />
    </>
  );
}
