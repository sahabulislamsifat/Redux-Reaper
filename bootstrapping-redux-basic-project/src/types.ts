export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplicated: boolean;
  priority: "High" | "Medium" | "Low";
}
