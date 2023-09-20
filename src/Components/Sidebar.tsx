import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";
import { PiSignInBold } from "react-icons/pi";
import { PiNotebookBold } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";
import upgrade from "../Assests/side-bkg.png";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; // Import the User type

import logo from "../Assests/logo.png";
import avatar from "../Assests/Avatar.jpg";

const Sidebar: React.FC = () => {
	const [popUp, setPopUp] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>(null);
	const [uName, setUName] = useState<string>("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
				const userEmail = currentUser.email;
				if (userEmail) {
					if (currentUser.displayName == null) {
						const u1 = currentUser.email.slice(0, -10);
						const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
						// console.log(uName)
						setUName(uName);
					}
				}
			} else {
				setUser(null);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const logoutUser = () => {
		signOut(auth)
			.then(() => {
				console.log("logout successful");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div>
			<div className="my-[30px] mx-[30px] shadow-xl rounded-xl bg-[#ffffff] w-[270px] pl-5 pr-5">
				<NavLink to={"/"}>
					<div className="flex items-center gap-6 font-bold py-5">
						<img src={logo} alt="" className="w-[60px] h-[60px]" />
						<p className="font-Jost text-[23px]">NoteHub</p>
					</div>
				</NavLink>
				<div className="w-full h-[1px] bg-[#768492]"></div>
				<div className="flex gap-3 items-center">
					{user ? (
						<>
							<img
								src={avatar}
								alt=""
								className="h-[50px] w-[50px] rounded-xl mt-3"
							/>
							<p className="font-Jost text-[16px] font-bold mt-2">{uName}</p>
						</>
					) : (
						<>
							<NavLink to={"/signin"}>
								<button className="mt-3 flex items-center justify-center gap-3 text-lg bg-[#0f0e17] text-white py-2 rounded-lg w-[230px] text-center">
									Sign In
									<PiSignInBold />
								</button>
							</NavLink>
						</>
					)}
				</div>
				<div
					className="flex cursor-pointer items-center mt-4 buttonStyle pl-5 gap-3"
					onClick={() => setPopUp(!popUp)}>
					<AiOutlinePlus />
					<p className="mr-16">Add New</p>
					<AiOutlineDown />
				</div>

				{popUp && (
					<div className="bg-[#f3f6fd] shadow-xl mt-3 rounded-xl h-32 w-56 px-3 py-2 text-center cursor-pointer">
						<NavLink to={"/create-note"}>
							<div className="flex items-center gap-3 ml-4 text-xl my-5">
								<PiNotebookBold />
								<p>Blank Note</p>
							</div>
						</NavLink>
						<NavLink to={"/todolist"}>
							<div className="flex items-center gap-3 ml-4 text-xl my-5">
								<LuListTodo />
								<p>To-do List</p>
							</div>
						</NavLink>
					</div>
				)}

				<div className="mt-4 cursor-pointer flex items-center gap-4 bg-[#f3f6fd] py-3 rounded-lg px-4">
					<PiNotebookBold />
					<p>Your Notes</p>
				</div>
				<NavLink to={"/todolist"}>
					<div className="mt-4 cursor-pointer flex items-center gap-4 bg-[#f3f6fd] py-3 rounded-lg px-4">
						<LuListTodo />
						<p>To-do List</p>
					</div>
				</NavLink>
				<div className="mt-5 text-center">
					<img src={upgrade} alt="" />
					<p className="capitalize">
						Set Business Account To Explore premium features
					</p>
					<NavLink to={"/pricing"}>
						<button className="mt-3 mb-5 buttonStyle px-5">Upgrade</button>
					</NavLink>
					<button
						className="mt-3 mb-5 ml-3 buttonStyle px-5"
						onClick={logoutUser}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
