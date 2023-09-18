import Footer from "./Components/Footer";
import NoteGround from "./Components/NoteGround";
import Sidebar from "./Components/Sidebar";
import TodoGround from "./Components/TodoGround";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
	return (
		<div className="flex relative">
			<Sidebar />
			<TodoGround />
			<Footer />
		</div>
	);
};

export default App;
