import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Programs", href: "#programs" },
	{ name: "Teachers", href: "#teachers" },
	{ name: "Gallery", href: "#gallery" },
	{ name: "Testimonials", href: "#testimonials" },
	{ name: "Admission", href: "#admission" },
	{ name: "Contact", href: "#contact" },
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		href: string
	) => {
		e.preventDefault();
		setMenuOpen(false);
		const id = href.replace("#", "");
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		} else if (href === "#home") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed nav mt-2 top-0 left-0 w-full z-50 mx-2 rounded-2xl">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				{/* Logo or Site Name */}
				<a
					href="/"
					className="text-2xl font-bold text-black font-poppins"
					onClick={(e) => handleNavClick(e, "#home")}
				>
					Happy Bright Kids
				</a>
				{/* Desktop Nav */}
				<div className="hidden md:flex gap-8 items-center">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-gray-700 font-medium hover:text-edukids-yellow transition-colors duration-200 px-2 py-1 rounded"
							onClick={(e) => handleNavClick(e, link.href)}
						>
							{link.name}
						</a>
					))}
				</div>
				{/* Mobile Hamburger */}
				<button
					className="md:hidden focus:outline-none"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle navigation menu"
				>
					<div className="hamburger">
						<input
							className="checkbox"
							type="checkbox"
							checked={menuOpen}
							onChange={() => setMenuOpen(!menuOpen)}
						/>
						<svg fill="none" viewBox="0 0 50 50" height="50" width="50">
							<path
								className="lineTop line"
								strokeLinecap="round"
								strokeWidth="4"
								stroke="black"
								d="M6 11L44 11"
							></path>
							<path
								strokeLinecap="round"
								strokeWidth="4"
								stroke="black"
								d="M6 24H43"
								className="lineMid line"
							></path>
							<path
								strokeLinecap="round"
								strokeWidth="4"
								stroke="black"
								d="M6 37H43"
								className="lineBottom line"
							></path>
						</svg>
					</div>
				</button>
			</div>
			{/* Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="md:hidden bg-white shadow-lg border-t border-edukids-blue"
					>
						<div className="flex flex-col gap-2 px-6 py-4">
							{navLinks.map((link, index) => (
								<motion.a
									key={link.name}
									href={link.href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.3,
										delay: index * 0.1,
										ease: "easeOut",
									}}
									className="text-gray-500 uppercase underline font-medium hover:text-edukids-yellow transition-colors duration-200 px-2 py-2 rounded"
									onClick={(e) => handleNavClick(e, link.href)}
								>
									{link.name}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
