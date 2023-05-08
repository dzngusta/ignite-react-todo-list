//components
import { Logo } from '@components/Logo';

export function Header() {
	return (
		<header className={'flex items-center justify-center w-full h-[200px] bg-base-gray-700 p-3 pb-4'}>
			<Logo />
		</header>
	);
}
