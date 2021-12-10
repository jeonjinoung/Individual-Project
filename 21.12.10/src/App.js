import React, { Component } from "react";
import "./App.css";
import Content from "./component/Content";
import Subject from "./component/subject";
import TOC from "./component/TOC";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: { title: "WEB", sub: "World wid Web" },
            contents: [
                { id: 1, title: "HTML", desc: "HTML is for infomation" },
                { id: 2, title: "CSS", desc: "HTML is for design" },
                {
                    id: 3,
                    title: "Javascript",
                    desc: "JavaScript is for interactive",
                },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                ></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content
                    title="HTML"
                    desc="HTML is HyperText Markup Language"
                ></Content>
            </div>
        );
    }
}

export default App;
