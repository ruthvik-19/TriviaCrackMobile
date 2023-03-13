import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./components/landing-page.components";
import Navbar from "./components/navbar.components";
import Q1 from "./components/question-pages/q1.components";
import Q2 from "./components/question-pages/q2.components";
import Q3 from "./components/question-pages/q3.components";
import Q4 from "./components/question-pages/q4.components";
import Q5 from "./components/question-pages/q5.components";
import EndingPage from "./components/ending-page.components";

function App() {
	return (
		<>
			<Navbar />
			<br />
			<Routes>
				<Route path='/'>
					<Route index element={ <LandingPage /> } />
					<Route path="q1" element={ <Q1 /> } />
					<Route path='q2' element={ <Q2 /> } />
					<Route path='q3' element={ <Q3 /> } />
					<Route path='q4' element={ <Q4 /> } />
					<Route path='q5' element={ <Q5 /> } />
					<Route path='thank-you' element={ <EndingPage /> } />
				</Route>
			</Routes>
		</>
	);
}

export default App;
