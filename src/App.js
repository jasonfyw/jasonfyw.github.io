import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';

import './App.css';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';

class App extends Component {
    state = {
        currentPage: null,
        sections: ['intro', 'about', 'projects']
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
                        <div className="about">
                            <h1>ABOUT ME</h1>
                        </div>
                        <div className="projects">
                            <h1>PROJECTS</h1>
                        </div>
                    </ReactPageScroller>
                </div>
            </div>
        );
    }
}

export default App;