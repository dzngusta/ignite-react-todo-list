declare interface ITask {
	id: string;
	task: string;
	completed: boolean;
}

declare type TasksList = ITask[];
