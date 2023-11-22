import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";

const Navbar = () => {
  return(
    <div className="relative w-full sm:flex justify-between items-center p=2" id="top">
      <h1 className="font-bold text-gray-300">Dashboard</h1>
      <div className="py-2">
        <TextInput placeholder="Search..." icon={SearchIcon}/>
      </div>
    </div>
  )
}

export default Navbar