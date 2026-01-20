import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Hammersmith_One, Rubik } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
	metadataBase: "https://ahnaf.my",
	alternates: {
		canonical: "/",
	},
	appLinks: {
		web: { url: "/" },
	},
	applicationName: "Ahnaf Portfolio",
	title: "It's Muhammad Ahnaf",
	description:
		"CTO @ Titonex | Software Developer | TypeScript, MERN, Postgres, Next.js, React Native, Prisma, Go, Docker",
	creator: "Muhammad Ahnaf",
	robots: { index: true, follow: true },
	formatDetection: { url: true, email: true, telephone: true, date: false, address: false },
	openGraph: {
		type: "website",
		siteName: "Muhammad Ahnaf Portfolio",
		title: "Ahnaf Portfolio",
		url: "/",
		images: "/og.png",
		emails: ["mahnaf.swe@gmail.com", "mahnafdev@gmail.com"],
		phoneNumbers: "+8801710243940",
		description:
			"CTO @ Titonex | Software Developer | TypeScript, MERN, Postgres, Next.js, React Native, Prisma, Go, Docker",
	},
	keywords: [
		"portfolio",
		"portfolio inspiration",
		"cool portfolio",
		"good portfolio",
		"great portfolio",
		"developer portfolio",
		"software developer portfolio",
		"web developer portfolio",
		"app developer portfolio",
		"software engineer portfolio",
		"programmer portfolio",
		"developer",
		"software developer",
		"web developer",
		"app developer",
		"software engineer",
		"programmer",
	],
};

export const hammersmithOne = Hammersmith_One({
	weight: ["400"],
	display: "swap",
	subsets: ["latin"],
});

export const rubik = Rubik({
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	subsets: ["latin"],
	style: ["normal", "italic"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={`${rubik.className} antialiased selection:bg-primary selection:text-background scroll-smooth`}
			>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
