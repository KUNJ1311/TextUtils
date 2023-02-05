// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setmode] = useState("light"); //dark mode is enabled or not
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setmode("dark");
			document.body.style.backgroundColor = "#13173d";
			showAlert("Dark mode has been enabled!", "success");
			// document.body.style.color = "white";
		} else {
			setmode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled!", "success");
			// document.body.style.color = "black";
		}
	};
	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3 ">
					<Routes>
						<Route exact path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Enter the text to perform given operations" mode={mode} />} />
						{/* <Route exact path="/about" element={<About />} mode={mode} /> */}
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
