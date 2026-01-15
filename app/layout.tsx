import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeueCyr = localFont({
	src: [
		{
			path: "../public/HelveticaNeueCyr/HelveticaNeueCyr-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/HelveticaNeueCyr/HelveticaNeueCyr-Roman.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/HelveticaNeueCyr/HelveticaNeueCyr-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/HelveticaNeueCyr/HelveticaNeueCyr-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-helvetica",
});

export const metadata: Metadata = {
	title: "Keng Makon",
	description:
		"Все официальные ссылки Keng Makon в одном месте. Каталог, социальные сети и контакты.",
	keywords: [
		"Keng Makon",
		"Мебель",
		"Мебель в Узбекистане",
		"Мебельная фабрика",
		"Каталог мебели",
	],
	authors: [{name: "Keng Makon"}],
	icons: [
		{url: "/favicon-dark.svg", media: "(prefers-color-scheme: light)"},
		{url: "/favicon-light.svg", media: "(prefers-color-scheme: dark)"},
		{
			url: "/favicon.ico",
			rel: "icon",
		},
		{
			url: "/favicon-default.png",
			rel: "apple-touch-icon",
			sizes: "180x180",
		},
	],
	openGraph: {
		title: "Keng Makon",
		siteName: "Keng Makon",
		url: "https://kengmakon.uz",
		description:
			"Все официальные ссылки Keng Makon в одном месте. Каталог, соцсети и контакты.",
		locale: "ru_RU",
		type: "website",
	},
	twitter: {
		title: "Keng Makon",
		description:
			"Все официальные ссылки Keng Makon в одном месте. Каталог, социальные сети и контакты.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${helveticaNeueCyr.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
