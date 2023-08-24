import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import User from "./pages/User";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/:about" element={<About />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/users/:id" element={<User />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
