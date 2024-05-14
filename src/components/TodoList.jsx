const TodoList = ({ todoData }) => {
  return (
    <div className="ml-[20%] w-[500px] h-[500px] overflow-auto bg-gray-600/50 rounded-lg">
      <h1 className="text-2xl font-medium text-orange-500">TodoList</h1>
      {todoData.map((todo, index) => (
        <div
          key={index}
          className="flex justify-center items-center mt-4 flex-row mb-4"
        >
          <div className="flex flex-col w-[250px] h-[180px] bg-white/60 rounded-lg p-4">
            <h1 className="text-3xl text-white font-bold">{todo.date}</h1>
            <h3 className="text-2xl text-white font-bold mt-5">
              {todo.text.length > 15
                ? `${todo.text.slice(0, 15)}...`
                : todo.text}
            </h3>
            {todo.finish && (
              <div className=" w-[100%] bg-yellow-500 m-auto p-2 mt-2">
                finish
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
