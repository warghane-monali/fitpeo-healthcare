import { useNavigate } from "react-router";
import { ArrowUpDown, CalendarDays, ChartLine, History, LayoutDashboard, LucideIcon, MessageCircleMore, Phone, Settings, SquarePlus } from 'lucide-react';
import { useState } from "react";

const Sidebar = () => {

	const navigate = useNavigate();
	const [active, setActive] = useState<string>("/dashboard");
	console.log("active", active)

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
		<div className="h-full bg-background py-5 flex flex-col">

			<header className="text-center mx-auto h-16 px-4">
				<h1 className="text-2xl font-semibold mb-1">
					<span className="text-ternary">Health</span>
					<span className="text-primary">care.</span>
				</h1>
			</header>

			<div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 px-4">

				{dashboardFeatures.map((feature) => (
					<span>
						<span className="text-gray-400 font-semibold text-xs">{feature.category}</span>
						{
							feature.features.map((item) => {
								return (
									<button
										className={`mb-1 ${active === item.route ? "text-primary font-semibold" : "text-gray-500"}  text-start font-medium text-sm ps-6 py-2 rounded-r-md cursor-pointer w-5/6
									flex items-center gap-3`}
										onClick={() => handleFeatureClick(item.route)}>
										<item.icon className={`${active === item.route ? "text-primary fill-primary" : "text-gray-500"}`} size={15} /> {item.name}
									</button>
								)
							})
						}

					</span>
				))}
			</div>

			<button
				className="flex cursor-pointer m-auto items-center gap-1 text-sm font-medium text-gray-500">
				<Settings size={16} className="text-gray-500" />
				<span className="">Setting</span>
			</button>
		</div>
	);
};

export default Sidebar;
