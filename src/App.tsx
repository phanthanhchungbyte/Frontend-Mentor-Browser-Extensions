import ListBody from "@components/ui/list/ListBody.tsx";
import FilterBar from "@features/filter/FilterBar.tsx";
import ExtensionList from "@features/list/ExtensionList.tsx";
import Navbar from "@features/nav/Navbar.tsx";
import "App.css";
import { ThemeProvider } from "context/ThemeContext.tsx";

function App() {
	return (
		<ThemeProvider>
			<div className="wrapper">
				<Navbar />
				<ListBody>
					<FilterBar />
					<ExtensionList />
				</ListBody>
			</div>
		</ThemeProvider>
	);
}

export default App;
