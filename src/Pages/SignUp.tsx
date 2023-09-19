import { useState, MouseEvent } from "react";
import logo from "../Assests/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
	const [isChecked, setIsChecked] = useState(false);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [cPassword, setCPassword] = useState<string>("");

	// const auth = getAuth();

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const signUpUser = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (password !== cPassword) {
			//   toast.error("Passwords are not matching");
		}
		// setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				console.log(user);
				// setLoading(false);
				// toast.success("Registered Successfully");
				// navigate("/login");
			})
			.catch((error) => {
				console.log(error.message);
				// toast.error(error.message);
				// setLoading(false);
			});
	};

	return (
		<div className="bg-[#f3f6fd] h-screen w-screen flex items-center justify-center">
			<div className="bg-white w-[511px] rounded-xl shadow-md h-[518px]">
				<div className="flex items-center justify-center mt-5">
					<img src={logo} alt="logo" className="h-[50px] w-[50px]" />
					<h3 className="font-Jost font-bold text-[23px] ml-3">NoteHub</h3>
				</div>
				<div className="flex flex-col text-center mt-[9px] text-[#768492] ">
					<h2 className="text-[27px]  text-black">Sign Up</h2>
					<p className="text-[16px] text-[#768492] mt-5 ">
						Create your account.
					</p>
					<form className="flex flex-col mt-5">
						<input
							type="text"
							placeholder="Display Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="bg-[#f3f6fd] ml-[18px] mx-[12px] my-[6px] rounded-xl pl-[8px] outline-none border border-[#dcdddf] h-[45px] w-[471px]"
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-[#f3f6fd] mx-[12px] ml-[18px] my-[6px] rounded-xl pl-[8px] outline-none border border-[#dcdddf] h-[45px] w-[471px]"
						/>
						<div className="flex">
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="bg-[#f3f6fd] border border-[#dcdddf] rounded-xl pl-[8px] outline-none h-[45px] w-[220px] mx-[12px] my-[6px] ml-[18px]"
							/>
							<input
								type="password"
								placeholder="Confirm Password"
								value={cPassword}
								onChange={(e) => setCPassword(e.target.value)}
								className="bg-[#f3f6fd] border border-[#dcdddf] h-[45px] rounded-xl pl-[8px] outline-none w-[220px] mx-[12px] my-[6px] ml-[18px]"
							/>
						</div>
						<div className="mt-5 text-start ml-[18px]">
							<input
								type="checkbox"
								checked={isChecked}
								onChange={handleCheckboxChange}
								className="mr-3 outline-none accent-black"
							/>
							<span>I agree with the terms of use</span>
						</div>
						<div className="flex justify-center mt-5">
							<button
								className="bg-black text-white rounded-xl  h-[38px] w-[80px]"
								onClick={(e) => signUpUser(e)}>
								Sign Up
							</button>
						</div>
						<p className="mt-5">
							Already have an account{" "}
							<span className="text-black">Sign In</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
