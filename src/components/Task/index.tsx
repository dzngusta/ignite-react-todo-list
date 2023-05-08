import { useState } from 'react';

//icons
import { Trash } from '@phosphor-icons/react';

//types
interface ITaskProps {
	task: ITask;
	onDeleteTask: (id: string) => void;
	onChangeTask: (id: string, newStatus: boolean) => void;
}

export function Task(props: ITaskProps) {
	const [checked, setChecked] = useState(props.task.completed);

	function handleDeleteTask() {
		props.onDeleteTask(props.task.id);
	}

	function handleTaskStatus() {
		const newStatus = !checked;

		props.onChangeTask(props.task.id, newStatus);

		setChecked(newStatus);
	}

	return (
		<div className={'task-preset'}>
			<input
				type={'checkbox'}
				className={'relative w-full max-w-[24px] h-6 m-1 rounded-full appearance-none border-blue border-2 cursor-pointer hover:scale-[1.03] hover:border-blue-dark hover:bg-blue-dark/20 checked:bg-purple-dark checked:border-none checked:hover:bg-purple checked-arrow'}
				checked={checked}
				onChange={handleTaskStatus}
			/>
			<p className={`w-full h-auto text-base ${checked ? 'line-through text-base-gray-300' : 'text-base-gray-100'}`}>
				{props.task.task}
			</p>
			<button
				type={'button'}
				className={'p-1 text-base-gray-300 hover:bg-base-gray-400 hover:text-base-danger hover:scale-[1.1] rounded-md'}
				onClick={handleDeleteTask}
			>
				<Trash size={16} />
			</button>
		</div>
	);
}
