import { NavLink } from "react-router-dom";
import error from "../Assests/404.png";

const Error = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<img src={error} alt="" className="h-[358px] w-[635px]" />
			<p className="text-[35px] mt-5 font-Jost">
				Oops! This page is not found.
			</p>
			<p className="text-[16px] mt-4 text-[#768492]">
				The page requested does not exists
			</p>
			<NavLink to={"/"}>
				<button className="bg-[#1f1c2f] mt-5 text-white rounded-lg px-4 py-2">
					Back to Home
				</button>
			</NavLink>
		</div>
	);
};

export default Error;
