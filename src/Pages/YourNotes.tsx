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
import { useNavigate } from "react-router-dom";

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
		// Fetch data again to update the list after deletion
		fetchData();
	};

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : data.length === 0 ? (
				<p>No data present</p>
			) : (
				data.map((item) => {
					return (
						<>
							<div
								key={item.id}
								className="border-2 border-black"
								onClick={() => changeRoute(item.id)}>
								<div>{item.data.title}</div>
								<div className="">{item.data.description}</div>
							</div>
							<div className="border-t-2 border-black">
								<button onClick={() => handleDelete(item.id)}>Delete</button>
							</div>
						</>
					);
				})
			)}
		</div>
	);
};

export default YourNotes;
