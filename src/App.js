import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar/>
                <div className="content">
                    <Intro/>
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;