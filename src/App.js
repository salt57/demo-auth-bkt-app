import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";

function App() {
const email = localStorage.getItem("email");
console.log(email)
return (
	<div className="App">
	<BrowserRouter>
		<Routes>
		<Route exact path="/Signin" element={<SignIn />} />
		<Route path="/Signup" element={<SignUp />} />
		<Route
			exact path="/"
			element={email ? <Home /> : <Navigate to="/Signin" />}
		/>
		</Routes>
	</BrowserRouter>
	</div>
);
}

export default App;
