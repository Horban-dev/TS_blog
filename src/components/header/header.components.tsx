import clsx from "clsx";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps { }

export const Header: FC<HeaderProps> = ({ }) => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx({
            "text-black/50": !isActive,
            "text-black/80": isActive,
        })
    return <header>
        <nav className="px-2 py-4">
            <div className="mx-auto  max-w-screen-xl flex justify-between items-center">
                <Link className="font-montseratt text-2xl ml-40 text-mainColor-blue" to="/">Best Blog</Link>
                <ul className="mr-40 flex list-none">
                    <li>
                        <NavLink className={navLinkClasses} to="/home">Home</NavLink>
                    </li>
                    <li className="ml-4">
                        <NavLink className={navLinkClasses} to="/in">Sign in</NavLink>
                    </li>
                    <li className="ml-4">
                        <NavLink className={navLinkClasses} to="/up">Sign up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
}