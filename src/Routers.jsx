import { Route, Routes } from "react-router-dom";

import AuthWrapper from "./pages/auth/AuthWrapper";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import HomePage from "./pages/homepage/HomePage";

export default function Routers() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<AuthWrapper>
							<Login />
						</AuthWrapper>
					</>
				}
			/>
			<Route
				path="/signup"
				element={
					<>
						<AuthWrapper>
							<Signup />
						</AuthWrapper>
					</>
				}
			/>
			<Route
				path="/home"
				element={
					<>
						<HomePage />
					</>
				}
			/>
		</Routes>
	);
}
