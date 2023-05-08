import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input({ ...rest }: InputProps) {

	return (
		<div className={'input-group'}>
			<h1 className={'input-info'}>{'Descrição da tarefa |'}</h1>
			<input
				{...rest}
				className={'input-preset'}
				type={'text'}
			/>
		</div>
	);
}
