import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/Ai';


const Navbar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Team', path: '*' },
      ];
    return (
        <nav className="p-4 bg-gray-200">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open=== true ? <AiOutlineClose></AiOutlineClose>
                    : 
                    <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={`md:flex justify-between gap-8 px-4 duration-1000 absolute md:static lg:static bg-gray-200
                ${open? 'top-20' : '-top-60'}
            `}>
                {
                    routes.map(route => 
                    <Link 
                        key={route.id} 
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;