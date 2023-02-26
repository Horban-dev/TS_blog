import clsx from "clsx";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../container/container.component";

interface HeaderProps { }

export const Header: FC<HeaderProps> = ({ }) => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx({
            "text-black/50": !isActive,
            "text-black/80": isActive,
        })
    return <header>
        <nav className="px-2 py-4">
            <Container>
                <div className="mx-auto  max-w-screen-xl flex justify-between items-center">
                    <Link className="font-montseratt text-2xl  text-mainColor-blue" to="/">Information Colums</Link>
                    <ul className=" flex list-none">
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
            </Container>
        </nav>
    </header>
}