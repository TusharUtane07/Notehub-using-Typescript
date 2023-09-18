import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="w-[1150px] bg-white shadow-xl absolute bottom-8  left-[330px] rounded-xl h-16 flex justify-between px-8 text-lg pt-5">
				<div className="flex gap-4 text-[#768492]">
					<p>Privacy Policy</p>
					<p>Terms of Use</p>
				</div>
				<div className="flex gap-4 text-[#768492]">
					<p>2023 &copy;</p>
					<NavLink to={"/"}>
						<p className="text-black cursor-pointer">NoteHub.</p>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Footer;
