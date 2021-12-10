import React, { Component } from "react";
import "./App.css";

import Content from "./component/Content";
import Subject from "./component/Subject";
import TOC from "./component/TOC";

class App extends Component {
    constructor(props) {
        super(props);
        //state value 초기화
        this.state = {
            mode: "read",
            seleted_content_id: 2,
            //state값을 초기화
            subject: { title: "WEB", sub: "World wid Web" },
            welcome: { title: "welcome", desc: "Hello React!!" },
            //subject값을 state화 시킬거임
            contents: [
                //state의 값을 여러개로 뽑아볼거임 [] = 배열 / {} 객체
                { id: 1, title: "HTML", desc: "HTML is for infomation" },
                //객체에 아이디를 1번 그리고 타이틀은 THML 그리고 desc 값으로 HTML is for infomation 주었다.
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
        console.log("App render");
        var _title,
            _desc = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.seleted_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        alert("hihihi");
                        this.setState({ mode: "welcome" });
                    }.bind(this)}
                ></Subject>

                <TOC
                    onChangePage={function (id) {
                        this.setState({
                            mode: "read",
                            seleted_content_id: Number(id),
                        });
                    }.bind(this)}
                    data={this.state.contents}
                ></TOC>

                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
