import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
	return (
		<div className="flex relative">
			<Sidebar />
			<Pricing />
			<Footer />
		</div>
	);
};

export default App;
