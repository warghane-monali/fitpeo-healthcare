import { createBrowserRouter } from "react-router";
import ErrorBoundry from "@app/ErrorBoundry";
import DashLayout from "@app/DashLayout";
import Login from "@features/auth/Login";
import Dashboard from "@features/dashboard/Dashboard";


const RouterPool = createBrowserRouter([
	{
		index: true,
		path: "/",
		Component: Login,
		errorElement: <ErrorBoundry />,
	},
	{
		path: "/dashboard",
		Component: DashLayout,
		children: [
			{ index: true, path: "", Component: Dashboard },
		]
	},
]);

export default RouterPool;
