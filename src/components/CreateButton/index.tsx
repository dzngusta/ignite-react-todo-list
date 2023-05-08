import React from 'react';

//icons
import { PlusCircle } from '@phosphor-icons/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	content: string;
}

export function CreateButton({ content, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={'button-preset'}
			type={'submit'}
		>
			{content}
			<PlusCircle size={16} />
		</button>
	);
}
