import { useState } from "react";
import { motion } from "framer-motion";
import { TabOption } from "@/types";

// Define props for the component
interface CustomTabsProps {
	options: TabOption[];
	defaultActive: TabOption;
	onChange: (value: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
	options,
	defaultActive,
	onChange,
}) => {
	const [activeTab, setActiveTab] = useState<TabOption>(
		defaultActive
	);

	const handleTabClick = (tab: TabOption) => {
		setActiveTab(tab);
		onChange(tab.value);
	};

	return (
		<div className="flex">
			<div className="relative flex border-1 border-gray-300  px-1 py-1 rounded-lg ">
				{options.map((tab) => {
					const isActive = activeTab?.value === tab.value;
					return (
						<button
							key={tab.value}
							onClick={() => handleTabClick(tab)}
							className={`relative px-2 py-1 text-sm font-normal transition-colors duration-300 cursor-pointer ${isActive ? "text-white" : "text-black"
								}`}>
							{isActive && (
								<motion.div
									layoutId="activeIndicator"
									className={`absolute inset-0 rounded-md bg-blue-600`}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 25,
									}}
								/>
							)}
							<span className="relative z-10">{tab.label}</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default CustomTabs;
