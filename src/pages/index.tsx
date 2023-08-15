import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage } from './Main';
import { baseLayout } from 'app/layouts/baseLayout';

const router = createBrowserRouter([
	{
		element: baseLayout,
		children: [{ path: '/', element: <MainPage /> }]
	}
]);

export const Routing = () => <RouterProvider router={router} />;
