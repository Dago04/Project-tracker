import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-hamburger.svg";
import CloseMenu from "../assets/images/icon-close.svg";
import "../Styles/Navbar.css";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);



    function handleOpenMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <header>
            <Menu onOpenMenu={handleOpenMenu} openMenu={openMenu} />
            {openMenu && <NavMenu className="hamburger-menu" />}
        </header>
    );
}

function Menu({ onOpenMenu, openMenu }) {
    return (
        <nav className="navbar">
            <Image logo={Logo} alt="Logo" />
            <NavMenu className="navbar-items" />
            <Image
                logo={openMenu ? CloseMenu : MenuIcon}
                className="menuIcon"
                alt="Menu Icon"
                onOpenMenu={onOpenMenu}
            />
        </nav>
    );
}
function Image({ logo, alt, className, onOpenMenu }) {
    return (
        <img src={logo} alt={alt} className={className} onClick={onOpenMenu} />
    );
}

function NavMenu({ className }) {
    return (
        <ul className={className}>
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <div className="divider"></div>
            <li>Login</li>
        </ul>
    );
}
