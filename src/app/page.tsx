import { Image } from "@chakra-ui/react";

export default function Home() {
	return (
		<main className="px-64 pb-32">
			<Image
				src="/hero-bg.png"
				alt="Black Gradient"
				width="100%"
				height="100vh"
				className="fixed top-0 left-0"
			/>
		</main>
	);
}
