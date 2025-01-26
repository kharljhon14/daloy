export interface Task {
  id: number;
  title: string;
  content: string;
  status: 'in progress' | 'done' | 'open' | 'in queue';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
  owner: number;
  assignTo: number;
}
