import { ChangeEvent, useEffect, useState } from 'react';

//libs
import { v4 as uuid } from 'uuid';

//hooks
import { useLocalStorage } from '@hooks/useStorange';

//components
import { CreateButton } from './CreateButton';
import { Header } from './Header';
import { Input } from './Input';
import { ClipboardText } from '@phosphor-icons/react';
import { Task } from './Task';


function App() {
	const [localTasks, setLocalTasks] = useLocalStorage('tasks', []);

	const [tasksList, setTasksList] = useState<TasksList>(localTasks);

	const [taskValue, setTaskValue] = useState<string>('');

	function handleTaskValue(e: ChangeEvent<HTMLInputElement>) {
		setTaskValue(e.target.value);
	}

	function handleCreateNewTask() {
		const newTask: ITask = {
			id: uuid(),
			task: taskValue,
			completed: false,
		};

		setTasksList((prev: TasksList) => ([
			newTask,
			...prev,
		]));

		setTaskValue('');
	}

	function deleteTask(id: string): void {
		const tasksListWithoutId = tasksList.filter((task: ITask) => task.id !== id);

		setTasksList(tasksListWithoutId);
	}

	function updateTask(id: string, newStatus: boolean): void {
		const newTaskList = [...tasksList];

		newTaskList.forEach((task: ITask) => {
			if (task.id === id) {
				task.completed = newStatus;
			}
		});

		setTasksList(newTaskList);
	}

	useEffect(() => {
		setLocalTasks(tasksList);
	}, [tasksList]);

	const isInputEmpty = taskValue.length === 0;
	const isTasksListEmpty = tasksList.length === 0;
	const completedTasksAmount = tasksList.filter((task: ITask) => task.completed).length;

	return (
		<div className={'relative flex flex-col content-center items-center pb-16'}>
			<Header />
			<section className={'w-full max-w-[740px] px-6'}>
				<div className={'relative flex row w-full h-full -mt-7 gap-2'}>
					<Input
						value={taskValue}
						placeholder={'Adicione uma nova tarefa'}
						onChange={handleTaskValue}
					/>
					<CreateButton
						content={'Criar'}
						onClick={handleCreateNewTask}
						disabled={isInputEmpty}
					/>
				</div>
				<div className={'flex flex-col w-full h-full mt-16 gap-6'}>
					<header className={'flex flex-row justify-between w-full h-auto font-inter font-bold tracking-wide'}>
						<div className={'flex flex-row gap-2'}>
							<p className={'text-sm text-blue'}>{'Tarefas criadas'}</p>
							<span className={'text-xs text-base-gray-200 py-[2px] px-2 rounded-full bg-base-gray-400'}>
								{tasksList.length}
							</span>
						</div>
						<div className={'flex flex-row gap-2'}>
							<p className={'text-sm text-purple'}>
								{'Concluídas'}
							</p>
							<span className={'text-xs text-base-gray-200 py-[2px] px-2 rounded-full bg-base-gray-400'}>
								{isTasksListEmpty ? '0' : `${completedTasksAmount} de ${tasksList.length}`}
							</span>
						</div>
					</header>
					{isTasksListEmpty ? (
						<div className={'flex flex-col w-full justify-center items-center px-6 py-16 gap-4 text-base-gray-400 rounded-lg border-t-2 border-base-gray-400'}>
							<ClipboardText size={56} />
							<p className={'text-center text-base leading-5 text-base-gray-300'}>
								<b className={'block'}>{'Você ainda não tem tarefas cadastradas'}</b>
								{'Crie tarefas e organize seus itens a fazer'}
							</p>
						</div>
					) : (
						<div className={'flex flex-col gap-3'}>
							{tasksList.map((task: ITask) => (
								<Task
									task={task}
									onDeleteTask={deleteTask}
									onChangeTask={updateTask}
									key={task.id}
								/>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
}

export default App;
