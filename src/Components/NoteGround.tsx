import { GrPowerReset } from "react-icons/gr";
import { MdSaveAlt } from "react-icons/md";
import { FaBackward } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { MouseEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";

const NoteGround = () => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [user, setUser] = useState<User | null>(null);
	const [uName, setUName] = useState<string>("");

	const handleReset = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setTitle("");
		setDescription("");
		toast.success("Successfully Reset!");
	};

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

	const saveIt = async (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		const ref = collection(db, uName);

		if (user) {
			await addDoc(ref, {
				title: title,
				description: description,
			});
			toast.success("Saved successfully!!");
		} else {
			toast.error("Login First!!");
		}
	};

	return (
		<>
			<Sidebar />
			<div>
				<div className="h-[78px] bg-white w-[1150px] shadow-md mt-[30px] rounded-xl text-3xl px-10 py-5 font-Jost font-bold flex justify-between">
					<p>New Note</p>
					<NavLink to={"/"}>
						<div className="flex items-center text-lg buttonStyle px-5 gap-3">
							<FaBackward />
							<button>Back</button>
						</div>
					</NavLink>
				</div>

				<div className="bg-white rounded-xl mt-6 shadow-md w-[1150px] ">
					<form>
						<div className="flex flex-col px-5 py-5">
							<label className="text-lg" htmlFor="title">
								Title
							</label>
							<input
								type="text"
								placeholder="Example Note"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="text-lg bg-[#f3f6fd] outline-none h-12 mt-2 pl-5  border-2 rounded-lg border-[#dcdddf] text-[#768492]"
							/>
							<label className="text-lg mt-5 mb-2" htmlFor="description">
								Description
							</label>
							<textarea
								cols={30}
								rows={11}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className="bg-[#f3f6fd] border-2 border-[#dcdddf] rounded-lg outline-none p-5"></textarea>
							<div className="flex items-center mt-5 gap-5 text-lg ">
								<div
									onClick={(e) => handleReset(e)}
									className="flex items-center cursor-pointer gap-2 bg-white border-2 border-[#0f0e17] text-[#0f0e17] px-3 py-1 rounded-lg">
									<GrPowerReset />
									<button>Reset</button>
								</div>
								<div
									className="flex items-center cursor-pointer gap-2 bg-[#0f0e17] text-white px-3 py-1 rounded-lg"
									onClick={(e) => saveIt(e)}>
									<MdSaveAlt />
									<button>Save</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default NoteGround;
