import { useState, MouseEvent } from "react";
import logo from "../Assests/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignIn = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const navigate = useNavigate();

	const signInUser = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				console.log("user login successful!!");
				navigate("/");
				toast.success("Login successfull!!");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className="bg-[#f3f6fd] h-screen w-screen flex items-center justify-center">
			<div className="bg-white w-[511px] rounded-xl shadow-md h-[480px]">
				<div className="flex items-center justify-center mt-5">
					<img src={logo} alt="logo" className="h-[50px] w-[50px]" />
					<h3 className="font-Jost font-bold text-[23px] ml-3">NoteHub</h3>
				</div>
				<div className="flex flex-col text-center mt-[9px] text-[#768492] ">
					<h2 className="text-[27px]  text-black">Sign In</h2>
					<p className="text-[16px] text-[#768492] mt-5 ">
						Login to stay connected.
					</p>
					<form className="flex flex-col mt-5">
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-[#f3f6fd] mx-[12px] ml-[18px] my-[6px] rounded-xl pl-[8px] outline-none border border-[#dcdddf] h-[45px] w-[471px]"
						/>

						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="bg-[#f3f6fd] border border-[#dcdddf] rounded-xl pl-[8px] outline-none h-[45px] w-[471px] mx-[12px] my-[6px] ml-[18px]"
						/>

						<div className="mt-5 text-start ml-[18px]">
							<input
								type="checkbox"
								checked={isChecked}
								onChange={handleCheckboxChange}
								className="mr-3 outline-none accent-black"
							/>
							<span>Remember Me</span>
						</div>
						<div className="flex justify-center mt-5">
							<button
								className="bg-black text-white rounded-xl  h-[38px] w-[80px]"
								onClick={(e) => signInUser(e)}>
								Sign In
							</button>
						</div>
						<p className="mt-5">
							<NavLink to={"/signup"}>
								Create an account <span className="text-black">Sign Up</span>
							</NavLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
