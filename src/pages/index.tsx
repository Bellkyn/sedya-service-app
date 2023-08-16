import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { baseLayout } from 'app/layouts/baseLayout';
import { MainPage } from './Main/Main';

const router = createBrowserRouter([
	{
		element: baseLayout,
		path: '/sedya-service-app/',
		children: [{ element: <MainPage />, path: '/sedya-service-app/' }]
	}
]);

export const Routing = () => <RouterProvider router={router} />;
