import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskState } from '../Types/types';

const loadTasksFromLocalStorage = (): TaskState["columns"] => {
    if (typeof window !== "undefined") {
        const storedTasks = localStorage.getItem("Task");
        return storedTasks ? JSON.parse(storedTasks) : [
            { id: 'todo', title: 'To Do', tasks: [] },
            { id: 'in-progress', title: 'In Progress', tasks: [] },
            { id: 'done', title: 'Done', tasks: [] },
        ];
    }
    return [
        { id: 'todo', title: 'To Do', tasks: [] },
        { id: 'in-progress', title: 'In Progress', tasks: [] },
        { id: 'done', title: 'Done', tasks: [] },
    ];
};

const saveTasksToLocalStorage = (columns: TaskState["columns"]) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("Task", JSON.stringify(columns));
    }
};

const initialState: TaskState = {
    columns: loadTasksFromLocalStorage(),
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            const column = state.columns.find((col) => col.id === action.payload.columnId);
            if (column) {
                column.tasks.push(action.payload);
                saveTasksToLocalStorage(state.columns);
            }
        },
        editTask: (state, action: PayloadAction<{ taskId: string; updatedTask: Partial<Task> }>) => {
            const { taskId, updatedTask } = action.payload;
            state.columns.forEach((column) => {
                const task = column.tasks.find((t) => t.id === taskId);
                if (task) {
                    Object.assign(task, updatedTask);
                    saveTasksToLocalStorage(state.columns);
                }
            });
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            const taskId = action.payload;
            state.columns.forEach((column) => {
                column.tasks = column.tasks.filter((task) => task.id !== taskId);
            });
            saveTasksToLocalStorage(state.columns);
        },
        moveTask: (state, action: PayloadAction<{ source: any; destination: any }>) => {
            const { source, destination } = action.payload;
            if (!destination) return;
            const sourceColumn = state.columns.find((col) => col.id === source.droppableId);
            const destColumn = state.columns.find((col) => col.id === destination.droppableId);
            if (sourceColumn && destColumn) {
                const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
                destColumn.tasks.splice(destination.index, 0, movedTask);
                saveTasksToLocalStorage(state.columns);
            }
        },
    },
});

export const { addTask, editTask, deleteTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
