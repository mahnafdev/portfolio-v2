import { styles } from "@/styles/Navbar";
import { Flex, Image, Link } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<header className="fixed top-0 left-[50%] translate-x-[-50%] w-full z-20">
			<nav
				style={styles.nav}
				className="max-w-136 bg-[#101313]/85 mx-auto px-7 py-3 flex justify-between items-center rounded-b-xl backdrop-blur"
			>
				{/* Logo */}
				<div>
					<Link
						href="/"
						outline="none"
						_hover={styles.logo_Hover}
						_active={styles.logo_Active}
						className="transition-all duration-200"
					>
						<Image
							src="/logo.png"
							alt="Logo"
							boxSize="2rem"
						/>
					</Link>
				</div>
				{/* Links */}
				<Flex
					alignItems="center"
					gapX="0.4rem"
				>
					<Link
						href="#about"
						textDecoration="none"
						outline="none"
						color="teal.50"
						style={styles.link}
						_hover={styles.link_Hover}
						_active={styles.link_Active}
						className="px-2.5 py-[0.3rem] rounded-[0.4rem] transition-all duration-200"
					>
						About
					</Link>
					<Link
						href="#builds"
						textDecoration="none"
						outline="none"
						color="teal.50"
						style={styles.link}
						_hover={styles.link_Hover}
						_active={styles.link_Active}
						className="px-2.5 py-[0.3rem] rounded-[0.4rem] transition-all duration-200"
					>
						Builds
					</Link>
					<Link
						href="#facts"
						textDecoration="none"
						outline="none"
						color="teal.50"
						style={styles.link}
						_hover={styles.link_Hover}
						_active={styles.link_Active}
						className="px-2.5 py-[0.3rem] rounded-[0.4rem] transition-all duration-200"
					>
						Facts
					</Link>
					<Link
						href="#workplaces"
						textDecoration="none"
						outline="none"
						color="teal.50"
						style={styles.link}
						_hover={styles.link_Hover}
						_active={styles.link_Active}
						className="px-2.5 py-[0.3rem] rounded-[0.4rem] transition-all duration-200"
					>
						Workplaces
					</Link>
					<Link
						href="#reach-me"
						textDecoration="none"
						outline="none"
						color="teal.50"
						style={styles.link}
						_hover={styles.link_Hover}
						_active={styles.link_Active}
						className="px-2.5 py-[0.3rem] rounded-[0.4rem] transition-all duration-200"
					>
						Reach Me
					</Link>
				</Flex>
			</nav>
		</header>
	);
};
