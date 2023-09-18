import { NavLink } from "react-router-dom";
import vector from "../Assests/vector.png";
import Sidebar from "../Components/Sidebar";

const Home = () => {
	return (
		<>
			<Sidebar />
			<div>
				<div className="h-[78px] bg-white w-[1150px] shadow-md mt-[30px] rounded-xl text-3xl px-10 py-5 font-Jost font-bold">
					NoteHub
				</div>
				<div className="bg-white rounded-xl mt-6 shadow-md w-[1150px] flex items-center px-10 pb-16">
					<div className="mt-16">
						<h1 className="text-7xl font-Jost font-bold  ">
							Forget about your messy notes.
						</h1>
						<p className="text-2xl mt-7 text-[#768492]">
							NoteHub is an Notemaking webapp developed for the ease of users
						</p>
						<p className="mt-5 text-4xl">
							Create awesome notes, To-do Lists and much more.
						</p>
						<NavLink to={"/create-note"}>
							<button className="font-Jost bg-[#0f0e17] text-white rounded-md py-3 text-2xl px-5 mt-8 ">
								Create Your First Note
							</button>
						</NavLink>
					</div>
					<div>
						<img src={vector} alt="" className="w-[700px]" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
