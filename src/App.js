import "./App.css";
import Header from "./components/Header";
import Outlet from "./components/Outlet";

function App() {
	return (
		<div className="app-container">
			<Header />
			<div className="pages">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
