import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import MenuItems from "./Menu/MenuItems";
import { menuItems } from "./menuItems";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="header-1">
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-lg-2 col-sm-5 col-md-4 col-6">
						<div className="logo">
							<Link href="/">
								<a>
									<img src="/img/logo.png" alt="VES" height="95vw"/>
								</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
						<div className="menu-wrap">
							<div className="main-menu">
							<ul>
                  <li>
                    <Link href="/">
                      <a style={{ fontSize: "22px" }}>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a style={{ fontSize: "22px" }}>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a style={{ fontSize: "22px" }}>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a style={{ fontSize: "22px" }}>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a style={{ fontSize: "22px" }}>Price List</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a style={{ fontSize: "22px" }}>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a style={{ fontSize: "22px" }}>Contact</a>
                    </Link>
                  </li>
                </ul>
							</div>
						</div>
						<div className="header-right-element text-white">
							{/* <a href="#">login</a> */}
							<Link href="/contact">
								<a className="theme-btn black">get started</a>
							</Link>
						</div>
					</div>
					<div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
						<div className="mobile-nav-wrap">
							<div id="hamburger" onClick={() => setIsOpen((prev) => !prev)}>
								<FaBars />
							</div>

							<div className={`mobile-nav ${isOpen ? "show" : ""}`}>
								<button type="button" className="close-nav" onClick={() => setIsOpen((prev) => !prev)}>
									<FaTimesCircle />
								</button>
								<nav className="sidebar-nav">
									<ul className="metismenu" id="mobile-menu">
										{menuItems.map((menu, index) => (
											<MenuItems isOpenMenu={isOpen} key={index} items={menu} />
										))}
									</ul>

									<Link href="/contact">
										<a className="theme-btn d-block mt-4 text-center ms-0">get started</a>
									</Link>
								</nav>
							</div>
						</div>
						<div
							className={`overlay ${isOpen ? "active" : ""}`}
							onClick={() => setIsOpen((prev) => !prev)}
						></div>
					</div>
				</div>
			</div>
		</header>
	);
}
