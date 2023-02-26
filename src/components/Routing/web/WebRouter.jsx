import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ArwaLandingPage = lazy(() =>
	import("../../screens/arwa-landing-page/ArwaLandingPage")
);
function WebRouter() {
	return (
		<Suspense fallback="">
			<Routes>
				<Route exact path="/" component={ArwaLandingPage} />
			</Routes>
		</Suspense>
	);
}

export default WebRouter;
