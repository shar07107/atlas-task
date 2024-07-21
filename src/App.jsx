import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
	return (
		<>
			<main
				className={"bg-color-base-3 min-h-screen w-full p-0 m-0 text-white"}>
				<BrowserRouter future={{ v7_startTransition: true }}>
					<ScrollToTop>
						<Routers />
					</ScrollToTop>
				</BrowserRouter>
			</main>
		</>
	);
}

export default App;
