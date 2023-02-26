import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../asstets/images/arwa-transparent.png";
function ArwaHelmet({ title }) {
	if (title) {
		return (
			<Helmet>
				<meta charSet="utf-8" />
				<title>{`${title}`} | Awra</title>
				<link rel="icon" type="image/png" href={Logo} />
				<meta
					id="og-title"
					property="og:title"
					content={`${title} | Steyp`}
				/>
			</Helmet>
		);
	} else {
		return (
			<Helmet>
				<meta charSet="utf-8" />
				<title>Arwa | Minimal Clothing</title>
				<link rel="icon" type="image/png" href={Logo} />
				<meta
					id="og-title"
					property="og:title"
					content="Arwa Minimal clothing"
				/>
			</Helmet>
		);
	}
}

export default ArwaHelmet;
