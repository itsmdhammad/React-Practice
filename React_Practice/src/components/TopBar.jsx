
function TopBar() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-screen h-16 text-2xl font-semibold bg-blue-500 flex justify-around items-center">
        <div className="w-3/6 h-16 text-3xl text-white flex justify-center items-center">
          <p>Maddy Dev</p>
        </div>
        <div className="w-3/6 h-16 text-xl flex justify-evenly items-center text-white">
          <p className="hover:bg-blue-400 px-4 py-2 rounded-full">Home</p>
          <p className="hover:bg-blue-400 px-4 py-2 rounded-full">Shop</p>
          <p className="hover:bg-blue-400 px-4 py-2 rounded-full">Products</p>
          <p className="hover:bg-blue-400 px-4 py-2 rounded-full">Cart</p>
          <p className="hover:bg-blue-400 px-4 py-2 rounded-full">Login</p>
        </div>
      </div>
    </div>
  )
}

export default TopBar

