import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen  ">
      <div className="border-gray-700 border chatRow">
        <NewChat />
        <div>{/* model selection */}</div>
        {/* map through the chatrows */}
      </div>
    </div>
  );
}

export default SideBar;
