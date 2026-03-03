import type { Metadata } from "next";
import "./global.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Muhammad Ahnaf",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiase">{children}</body>
		</html>
	);
}
