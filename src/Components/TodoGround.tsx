import { useState, useEffect } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TodoGround = () => {
	const [todo, setTodo] = useState<string>("");
	const [todoList, setTodoList] = useState<
		{ text: string; completed: boolean }[]
	>([]);

	// Load todos from local storage when the component mounts
	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodoList(JSON.parse(storedTodos));
		}
	}, []);

	const saveTodosToLocalStorage = (todos: any[]) => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const months: string[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const currentDate: Date = new Date();

	const handleTodo = () => {
		if (todo.trim() !== "") {
			const newTodoList = [...todoList, { text: todo, completed: false }];
			setTodoList(newTodoList);
			setTodo("");
			saveTodosToLocalStorage(newTodoList); // Save the updated list to local storage
		}
	};

	const clearAll = () => {
		setTodoList([]);
		localStorage.removeItem("todos"); // Remove all todos from local storage
	};

	const toggleCompleted = (index: number) => {
		const updatedTodoList = [...todoList];
		updatedTodoList[index].completed = !updatedTodoList[index].completed;
		setTodoList(updatedTodoList);
		saveTodosToLocalStorage(updatedTodoList); // Save the updated list to local storage
	};

	const deleteSpecific = (index: number) => {
		const updatedList = todoList.filter((_, i) => i !== index);
		setTodoList(updatedList);
		saveTodosToLocalStorage(updatedList); // Save the updated list to local storage
	};

	return (
		<div>
			<div className="h-[78px] bg-white w-[1150px] shadow-md mt-[30px] rounded-xl text-3xl px-10 py-5 font-Jost font-bold">
				To-do List
			</div>

			<div className="bg-white rounded-xl mt-6 shadow-md w-[1150px] pb-10">
				<div className="pt-5 px-5">
					<input
						type="text"
						placeholder="Example to-do"
						className="text-lg bg-[#f3f6fd]  outline-none h-12 mt-2 pl-5  border-2 rounded-lg border-[#dcdddf] text-[#768492] w-full "
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<div className="flex items-center justify-end gap-8 mt-5 pb-5 text-2xl">
						<div
							className="flex items-center gap-2 bg-[#0f0e17] text-white px-5 py-2 text-xl rounded-lg cursor-pointer"
							onClick={handleTodo}>
							<BiAddToQueue />
							<p className="text-lg">Add</p>
						</div>
					</div>
					<div className="text-xl px-7 mt-2  overflow-scroll border-2 rounded-lg border-[#dcdddf]  text-black/60 capitalize h-[300px]">
						{todoList.length === 0 ? (
							<p className="p-8 text-3xl">No to-do's here...</p>
						) : (
							<ul>
								{todoList.map((item, index) => (
									<li
										key={index}
										className={`mt-3 flex items-center justify-between bg-[#f3f6fd] border-2 border-[#dcdddf] px-5 h-12 pt-1 rounded-lg`}>
										<div className="flex items-center">
											<input
												type="checkbox"
												className="mr-3 w-8 h-7 accent-black"
												onClick={() => toggleCompleted(index)}
												checked={item.completed}
											/>
											<p className={`${item.completed ? "line-through" : ""}`}>
												{index + 1}. {item.text}
											</p>
										</div>
										<div className="flex gap-5">
											<div>
												{months[currentDate.getMonth()]} {currentDate.getDate()}
												, {currentDate.getFullYear()}
											</div>
											<div
												onClick={() => deleteSpecific(index)}
												className="bg-[#0f0e17] cursor-pointer rounded-full text-white p-2">
												<MdOutlineDeleteOutline />
											</div>
										</div>
									</li>
								))}
							</ul>
						)}
					</div>

					<div
						className="mt-5 cursor-pointer text-center mx-auto bg-[#0f0e17] text-white w-20 py-1.5 px-5 rounded-lg"
						onClick={clearAll}>
						Clear
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoGround;
