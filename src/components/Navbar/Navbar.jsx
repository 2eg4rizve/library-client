import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";





const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const { isDarkMode, setIsDarkMode } = useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can save the theme preference to local storage if needed.
    };


    const navLink = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Home
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/addBook"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Add Book
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/allBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            All Books
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/borrowedBooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Borrowed Books
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            About
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/speciality"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Speciality
        </NavLink>

        <div className="mr-[20px]"></div>

        <NavLink
            to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#362FD9] underline font-bold" : ""
            }
        >
            Contact Us

        </NavLink>









    </>


    return (
        <div className="mb-[50px] sticky top-0 z-50" style={{ background: isDarkMode ? "#45474B" : "white" }}>

            <div className="navbar bg-base-100 " style={{ background: isDarkMode ? "#45474B" : "white", color: isDarkMode ? "white" : "black" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">The Riz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[20px]">
                        {navLink}
                    </ul>
                </div>

                <div className="navbar-end ">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className=" flex flex-col justify-center">
                                        <p>{user.displayName}</p>

                                    </div>

                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                </div>

                                <div>

                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm  btn-primary bg-[#F4E869] text-black">Logout</button>

                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  bg-[#F4E869] pb-[100px] z-20">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logOut}
                                        className="btn btn-sm btn-primary bg-[#F4E869] text-black">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <div>
                                <Link to='/login'>
                                    <button className="btn btn-sm  btn-primary bg-[#F4E869] text-black">Login</button>
                                </Link>
                                /
                                <Link to='/register'>
                                    <button className="btn btn-sm text-black btn-primary bg-[#F4E869]">Register</button>
                                </Link>

                            </div>




                    }
                </div>


            </div>

            <div className="flex justify-end">
                <p>Light Mode</p>
                <label className="toggle-switch mx-[5px]">
                    <input
                        type="checkbox"
                        className="toggle"
                        onChange={toggleTheme}

                    />
                    <span className="slider round"></span>
                </label>
                <p>Dark Mode</p>
            </div>

        </div>
    );
};

export default Navbar;