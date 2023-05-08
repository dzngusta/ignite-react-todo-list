import { useCallback, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any = '') => {
	const [state, setState] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key);

			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch {
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value: string) => {
			try {
				setState(value);
				localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.log(error);
			}
		},
		[key],
	);

	return [state, setValue];
};
