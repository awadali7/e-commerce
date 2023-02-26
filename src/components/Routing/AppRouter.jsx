import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const WebRouter = lazy(() => import("./web/WebRouter"));

function AppRouter() {
	return (
		<Suspense fallback="">
			<Routes>
				<Route path="/" element={<WebRouter />} />
			</Routes>
		</Suspense>
	);
}

export default AppRouter;
