import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

const Pricing = () => {
	return (
		<>
			<Sidebar />
			<div>
				<div className="h-[78px] bg-white w-[1150px] shadow-md mt-[30px] rounded-xl text-3xl px-10 py-5 font-Jost font-bold">
					Pricing
				</div>

				<div className="bg-white rounded-xl mt-6 shadow-md w-[1150px] ">
					<div className="text-3xl px-10 py-5">Basic Pricing Box</div>
					<div className="h-[1.5px] bg-[#768492]/20"></div>
					<div className="grid grid-cols-3 gap-5 mx-5">
						<div className="border-2 border-black/20 rounded-xl m-10 text-center p-10">
							<p className="text-xl text-[#768492]">BASIC</p>
							<div className="flex items-end mt-4 mb-3 justify-center">
								<p className="text-6xl font-Jost">$34</p>
								<p className="text-[#768492]">/Month</p>
							</div>
							<p className="text-[#768492]">
								explicabo aspernatur ratione nulla rerum molestias omnis cum
								blanditiis adipisci eaque Lorem ipsum dolor sit amet.maiores
								cupiditate?
							</p>
							<button className="buttonStyle mt-5 px-5">Start Starter</button>
						</div>
						<div className="border-2 border-black/20 rounded-xl m-10 text-center p-10">
							<p className="text-xl text-[#768492]">BASIC</p>
							<div className="flex items-end mt-4 mb-3 justify-center">
								<p className="text-6xl font-Jost">$68</p>
								<p className="text-[#768492]">/Month</p>
							</div>
							<p className="text-[#768492]">
								explicabo aspernatur ratione nulla rerum molestias omnis cum
								blanditiis adipisci eaque maiores cupiditate? Lorem ipsum dolor
								sit amet.
							</p>
							<button className="buttonStyle mt-5 px-5">Start Starter</button>
						</div>
						<div className="border-2 border-black/20 rounded-xl m-10 text-center p-10">
							<p className="text-xl text-[#768492]">BASIC</p>
							<div className="flex items-end mt-4 mb-3 justify-center">
								<p className="text-6xl font-Jost">$93</p>
								<p className="text-[#768492]">/Month</p>
							</div>
							<p className="text-[#768492]">
								explicabo aspernatur ratione nulla rerum molestias omnis cum
								blanditiis adipisci eaque maiores cupiditate? Lorem ipsum dolor
								sit amet.
							</p>
							<button className="buttonStyle mt-5 px-5">Start Starter</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Pricing;
