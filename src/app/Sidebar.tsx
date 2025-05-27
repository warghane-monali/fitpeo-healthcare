import { useNavigate } from "react-router";
import { ArrowUpDown, CalendarDays, ChartLine, LayoutDashboard, Menu, MessageCircleMore, Phone, Settings, SquarePlus, X } from 'lucide-react';
import { useState } from "react";

const Sidebar = () => {

	const navigate = useNavigate();
	const [active, setActive] = useState<string>("/dashboard");

	const [drawerOpen, setDrawerOpen] = useState(false);

	interface DashboardFeature {
		category: string;
		features: Record<string, any>[];
	}

	const dashboardFeatures: DashboardFeature[] = [
		{
			category: 'General',
			features: [
				{
					name: 'Dashboard',
					icon: LayoutDashboard,
					route: '/dashboard'
				},
				{
					name: 'History',
					icon: ArrowUpDown,
				},
				{
					name: 'Calender',
					icon: CalendarDays,
				},
				{
					name: 'Appointments',
					icon: SquarePlus,
				},
				{
					name: 'Statistics',
					icon: ChartLine,
				}
			]
		},

		{
			category: 'Tools',
			features: [
				{
					name: 'Chat',
					icon: MessageCircleMore,
				},
				{
					name: 'Support',
					icon: Phone,
				}
			]
		}
	];

	const handleFeatureClick = (route?: string) => {
		if (route) {
			setActive(route);
			navigate(route);
		}
	};

	return (
		<>
			<button
				className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
				onClick={() => setDrawerOpen(true)}
				aria-label="Open menu"
			>
				<Menu size={24} />
			</button>

			{drawerOpen && (
				<div
					className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
					onClick={() => setDrawerOpen(false)}
					aria-hidden="true"
				/>
			)}

			<div className={`
					fixed top-0 left-0 h-full bg-background py-5 flex flex-col
					w-64 z-50
					transform transition-transform duration-300 ease-in-out
					${drawerOpen ? 'translate-x-0' : '-translate-x-full'}
					md:translate-x-0 md:static md:w-56
					`}>
				<div className="md:hidden flex justify-end px-4 mb-2">
					<button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
						<X size={24} />
					</button>
				</div>
				<header className="text-center mx-auto h-16 px-4">
					<h1 className="text-2xl font-semibold mb-1">
						<span className="text-ternary">Health</span>
						<span className="text-primary">care.</span>
					</h1>
				</header>

				<div className="flex-1 flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 px-8">

					{dashboardFeatures.map((feature, index) => (
						<div key={index} className="w-full">
							<h3 className="text-gray-400 font-semibold text-xs ps-6 py-2 mt-2">{feature.category}</h3>
							{
								feature.features.map((item) => {
									return (
										<button
											className={`mb-1 ${active === item.route ? "text-primary font-semibold" : "text-gray-500"}  
											text-start font-medium text-sm ps-6 py-2 rounded-r-md cursor-pointer w-5/6 flex items-center gap-3`}
											onClick={() => handleFeatureClick(item.route)}>
											<item.icon className={`${active === item.route ? "text-primary fill-primary" : "text-gray-500"}`} size={15} /> {item.name}
										</button>
									)
								})
							}

						</div>
					))}
				</div>

				<button
					className="mb-4 text-gray-500 text-start font-medium text-sm ps-14 py-2 rounded-r-md cursor-pointer w-5/6 flex items-center gap-3">
					<Settings size={16} className="text-gray-500" />
					<span>Setting</span>
				</button>
			</div>


		</>
	);
};

export default Sidebar;
