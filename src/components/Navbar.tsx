import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className='w-[100%] h-16 bg-black flex items-center top-0 left-0 justify-between p-4 fixed z-50'>
        <img className="w-24" src={logo} alt="" />
        <div className="text-white">
            <button className="rounded px-6 py-2">SignIn</button>
            <button className="bg-red-600 rounded px-6 py-2">SignUP</button>
        </div>
    </header>
  )
}

export default Navbar


