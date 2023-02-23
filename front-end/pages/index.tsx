import WalletConnect from "../components/WalletConnect";
import Head from "next/head";
import MainDApp from "../components/MainDApp";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex justify-between m-5 px-5 items-center">
				<div className="flex">
					<h1 className="text-4xl font-bold text-center">Bridge</h1>
				</div>
				<div className="flex">
					<WalletConnect />
				</div>
			</div>
			<div>
				<MainDApp />
			</div>
		</div>
	);
}
