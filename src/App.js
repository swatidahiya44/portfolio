import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/education"><Education /></Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
export default App;
