import { useNavigate } from "react-router";
import Breadcrumb from "./Breadcrumb";

const Menubar = () => {
	const today = new Date();
	const options: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "short",
		// year: "numeric",
	};
	const dayMonth = today
		.toLocaleDateString("en-US", options)
		.replace(",", "");

	const year = today.getFullYear();

	const navigate = useNavigate();

	return (
		<div className="px-6 py-2 flex justify-between items-center">
			<Breadcrumb />
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-1 text-gray-600">
					<span className="text-sm font-semibold">{dayMonth},</span>
					<span className="text-xs">{year}</span>
				</div>
				<p onClick={() => navigate("/profile")}>Profile</p>
			</div>
		</div>
	);
};

export default Menubar;
