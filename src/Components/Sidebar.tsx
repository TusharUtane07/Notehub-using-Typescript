import { useState } from "react";

import logo from "../Assests/logo.png";
import avatar from "../Assests/Avatar.jpg";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
import { PiNotebookBold } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";
import upgrade from "../Assests/side-bkg.png";

const Sidebar = () => {
	const [popUp, setPopUp] = useState<boolean>(false);

	return (
		<div>
			<div className=" my-[30px] mx-[30px] shadow-xl rounded-xl bg-[#ffffff] w-[270px] pl-5 pr-5">
				<div className="flex items-center gap-6 font-bold py-5">
					<img src={logo} alt="" className="w-[60px] h-[60px]" />
					<p className="font-Jost text-[23px]">NoteHub</p>
				</div>
				<div className="w-full h-[1px] bg-[#768492]"></div>
				<div className="flex gap-3 items-center">
					<img
						src={avatar}
						alt=""
						className="h-[50px] w-[50px] rounded-xl mt-3"
					/>
					<p className="font-Jost text-[16px] font-bold mt-2">
						Tushar Rambhau Utane
					</p>
				</div>
				<div className="mt-3 bg-[#f3f6fd] flex gap-3 items-center h-[40px] pl-3 rounded-lg">
					<BiSearch />
					<input
						type="text"
						placeholder="search"
						className="bg-transparent outline-none  w-[150px]  text-lg pl-2"
					/>
				</div>
				<div
					className="flex cursor-pointer items-center  mt-4 buttonStyle pl-5 gap-3"
					onClick={() => setPopUp(!popUp)}>
					<AiOutlinePlus />
					<p className="mr-16">Add New</p>
					<AiOutlineDown />
				</div>

				{popUp ? (
					<div className="bg-[#f3f6fd] shadow-xl mt-3 rounded-xl h-32 w-56 px-3 py-2 text-center cursor-pointer">
						<div className="flex items-center gap-3 ml-4 text-xl my-5">
							<PiNotebookBold />
							<p>Blank Note</p>
						</div>
						<div className="flex items-center gap-3 ml-4 text-xl my-5">
							<LuListTodo />
							<p>To-do List</p>
						</div>
					</div>
				) : (
					<div></div>
				)}

				<div className="mt-4 flex items-center gap-4 bg-[#f3f6fd] py-3 rounded-lg px-4">
					<PiNotebookBold />
					<p>Your Notes</p>
				</div>

				<div className="mt-4 flex items-center gap-4 bg-[#f3f6fd] py-3 rounded-lg px-4">
					<LuListTodo />
					<p>To-do List</p>
				</div>
				<div className="mt-5 text-center">
					<img src={upgrade} alt="" />
					<p className="capitalize">
						Set Business Account To Explore premium features
					</p>
					<button className="mt-3 mb-5 buttonStyle px-5">Upgrade</button>
					<button className="mt-3 mb-5 ml-3 buttonStyle px-5">Logout</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
