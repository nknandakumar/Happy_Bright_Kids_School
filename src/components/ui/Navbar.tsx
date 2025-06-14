import React, { useState } from "react";

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
		<nav className="fixed  mt-2  top-0 left-0 w-full z-50 bg-[url(/grain.svg)] mx-2 rounded-full shadow-md">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				{/* Logo or Site Name */}
				<a
					href="#home"
					className="text-2xl font-bold text-edukids-blue font-poppins"
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
							className="text-edukids-blue font-medium hover:text-edukids-yellow transition-colors duration-200 px-2 py-1 rounded"
							onClick={(e) => handleNavClick(e, link.href)}
						>
							{link.name}
						</a>
					))}
				</div>
				{/* Mobile Hamburger */}
				<button
					className="md:hidden flex flex-col gap-1 focus:outline-none"
					onClick={() => setMenuOpen((m) => !m)}
					aria-label="Toggle navigation menu"
				>
					<span className="block w-7 h-1 bg-edukids-blue rounded"></span>
					<span className="block w-7 h-1 bg-edukids-blue rounded"></span>
					<span className="block w-7 h-1 bg-edukids-blue rounded"></span>
				</button>
			</div>
			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-white shadow-lg border-t border-edukids-blue animate-fade-in-up">
					<div className="flex flex-col gap-2 px-6 py-4">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-edukids-blue font-medium hover:text-edukids-yellow transition-colors duration-200 px-2 py-2 rounded"
								onClick={(e) => handleNavClick(e, link.href)}
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
