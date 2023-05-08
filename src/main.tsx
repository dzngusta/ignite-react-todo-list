import React from 'react';
import ReactDOM from 'react-dom/client';

//styles
import '@scss/global.scss';

//componentsz
import App from './components/App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
