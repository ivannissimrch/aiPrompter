import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-screen bg-white">
			<body className="h-full bg-green-400 grid grid-cols-[repeat(12,_1fr)] grid-rows-[repeat(12,_1fr)] gap-x-[0px] gap-y-[0px]">
				<Header />
				<main className="[grid-area:2_/_1_/_12_/_13] bg-white">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
