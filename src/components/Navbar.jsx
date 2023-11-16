import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";

const Navbar = () => {
  return(
    <div className="">
      <h1>Dashboard</h1>
      <div>
        <TextInput placeholder="Search..." icon={SearchIcon}/>
      </div>
    </div>
  )
}

export default Navbar