export type Task = {
    id: string;
    title: string;
    description?: string;
    tags?: string[];
    dueDate?: string;
    columnId: string;
    createdAt?: string;
  }
  
  export type  Column = {
    id: string;
    title: string;
    tasks: Task[];
  }
  
  export type TaskState = {
    columns: Column[];
  }

  export type ColumnProps = {
    id: string;
    title: string;
    column:string;
    tasks: any[];
    onEditTask: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
    onMoveTask: (taskId: string, direction: 'left' | 'right') => void;
  }

  export type TaskProps = {
    id: string;
    title: string;
    columns:string;
    description?: string;
    tags?: string[];
    dueDate?: string;
    createdAt?: string;
    onEdit: () => void;
    onDelete: () => void;
    onMoveLeft: () => void;
    onMoveRight: () => void;
    index: number;
  }

  export type EditTaskModalProps = {
    task: Task;
    onSave: (updatedTask: Partial<Task>) => void;
    onClose: () => void;
  }