import {
	DocumentData,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";

const YourNotes = () => {
	const [data, setData] = useState<DocumentData[]>([]);
	const [user, setUser] = useState<User | null>(null);
	const [uName, setUName] = useState<string>("");

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const q = query(collection(db, uName));
				const querySnapshot = await getDocs(q);
				const documents: DocumentData[] = querySnapshot.docs.map((doc) =>
					doc.data()
				);
				setData(documents);
				console.log(documents);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		if (uName && user) {
			fetchData();
		}
	}, [uName, user]);

	return (
		<div>
			{data.map((item) => {
				return (
					<div>
						{item.title}
						{item.description}
					</div>
				);
			})}
		</div>
	);
};

export default YourNotes;
