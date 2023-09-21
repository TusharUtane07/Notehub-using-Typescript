import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteGround from "./Components/NoteGround";
import TodoGround from "./Components/TodoGround";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<div className="flex relative">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/todolist" element={<TodoGround />} />
					<Route path="/create-note" element={<NoteGround />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
};

export default App;
