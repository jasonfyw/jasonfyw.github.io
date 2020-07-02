import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
    state = {
        currentPage: null,
        sections: ['intro', 'about', 'projects', 'contact']
    }

    handlePageChange = number => {
        this.setState({ currentPage: number })
    }

    render() {
        return (
            <div className="App">
                <Sidebar activeSection={this.state.sections[this.state.currentPage]} handlePageChange={this.handlePageChange} />
                <div className="content">
                    <ReactPageScroller
                        pageOnChange={this.handlePageChange}
                        customPageNumber={this.state.currentPage}
                    >
                        <Intro handlePageChange={this.handlePageChange} />
                        <About />
                        <Projects />
                        <Contact />
                    </ReactPageScroller>
                </div>
            </div>
        );
    }
}

export default App;