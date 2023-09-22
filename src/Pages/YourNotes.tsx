import {
	DocumentData,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { FaBackward } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const YourNotes = () => {
	const [data, setData] = useState<Array<{ id: string; data: DocumentData }>>(
		[]
	);
	const [user, setUser] = useState<User | null>(null);
	const [uName, setUName] = useState<string>("");
	const [loading, setLoading] = useState(true); // Add a loading state

	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
				const userEmail = currentUser.email;
				if (userEmail) {
					if (currentUser.displayName == null) {
						const u1 = userEmail.slice(0, -10);
						const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
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

	const fetchData = async () => {
		try {
			const q = query(collection(db, uName));
			const querySnapshot = await getDocs(q);
			const documents: Array<{ id: string; data: DocumentData }> =
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}));
			setData(documents);
			setLoading(false); // Set loading to false when data is fetched
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		if (uName && user) {
			fetchData();
		}
	}, [uName, user]);

	const changeRoute = (id: any) => {
		navigate(`/editor/${id}`);
	};
	const handleDelete = async (item: any) => {
		await deleteDoc(doc(db, uName, item));
		toast.success("Deleted Successfully!!");
		// Fetch data again to update the list after deletion
		fetchData();
	};

	return (
		<>
			<Sidebar />
			<div className="flex flex-col h-[688px]">
				<div className="h-[78px] bg-white w-[1150px]  shadow-md mt-[30px] rounded-xl text-3xl px-10 py-5 font-Jost font-bold flex justify-between">
					<p>Your Notes</p>
					<NavLink to={"/"}>
						<div className="flex items-center text-lg buttonStyle px-5 gap-3">
							<FaBackward />
							<button>Back</button>
						</div>
					</NavLink>
				</div>

				<div className="bg-white rounded-xl mt-6 shadow-md w-[1150px] h-full  px-5 overflow-scroll">
					<div className="bg-white rounded-xl  text-xl capitalize py-5 cursor-pointer ">
						<div className="">
							{loading ? (
								<p className="text-6xl flex items-center justify-center h-[500px]">
									Loading...
								</p>
							) : data.length === 0 ? (
								<p className="text-center text-4xl font-Jost font-bold">
									No data present
								</p>
							) : (
								data.map((item) => {
									return (
										<>
											<div className="flex justify-between mx-10 border-2 p-5 rounded-lg border-black my-5">
												<div
													key={item.id}
													className="f "
													onClick={() => changeRoute(item.id)}>
													<div className="text-3xl font-bold font-Jost">
														{item.data.title}
													</div>
												</div>
												<div className="">
													<button
														onClick={() => handleDelete(item.id)}
														className="text-2xl buttonStyle px-8">
														<MdDelete />
													</button>
												</div>
											</div>
										</>
									);
								})
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default YourNotes;
