import { GrPowerReset } from "react-icons/gr";
import { MdSaveAlt } from "react-icons/md";
import { FaBackward } from "react-icons/fa";

const NoteGround = () => {
	return (
		<div>
			<div className="h-[78px] bg-white w-[1150px] shadow-md mt-[30px] rounded-xl text-3xl px-10 py-5 font-Jost font-bold flex justify-between">
				<p>New Note</p>
				<div className="flex items-center text-lg buttonStyle px-5 gap-3">
					<FaBackward />
					<button>Back</button>
				</div>
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
							className="text-lg bg-[#f3f6fd] outline-none h-12 mt-2 pl-5  border-2 rounded-lg border-[#dcdddf] text-[#768492]"
						/>
						<label className="text-lg mt-5 mb-2" htmlFor="description">
							Description
						</label>
						<textarea
							cols={30}
							rows={11}
							className="bg-[#f3f6fd] border-2 border-[#dcdddf] rounded-lg outline-none p-5"></textarea>
						<div className="flex items-center mt-5 gap-5 text-lg ">
							<div className="flex items-center cursor-pointer gap-2 bg-white border-2 border-[#0f0e17] text-[#0f0e17] px-3 py-1 rounded-lg">
								<GrPowerReset />
								<button>Reset</button>
							</div>
							<div className="flex items-center cursor-pointer gap-2 bg-[#0f0e17] text-white px-3 py-1 rounded-lg">
								<MdSaveAlt />
								<button>Save</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NoteGround;
