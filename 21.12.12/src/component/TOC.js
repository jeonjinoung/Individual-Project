import React, { Component } from "react";

class TOC extends Component {
    render() {
        console.log("TOC render");
        var lists = [];
        //나타나는 테그 들을 lists라는 변수선언 그 값으로 배열을 만듬
        var data = this.props.data;
        //반복문
        var i = 0;
        //반복문 기본값
        while (i < data.length) {
            //반복문 선언 / data의 길이만큼 반복
            // lists.push(
            //     <li key={data[i].id}>
            //         {/* 각각의 리스트의 항목들은 key값이 필요함 */}
            //         <a
            //             href={"/content" + data[i].id}
            //             // data-id={data[i].id} //속성값을 이용한 추적
            //             onClick={function (id, e) {
            //                 e.preventDefault();
            //                 this.props.onChangePage(id); //  this.props.onChangePage(e.target.dataset.id) 속성값을 이용한 출력
            //             }.bind(this, data[i].id)} //bind(this)} 속성값을 이용한 출력
            //         >
            //             {data[i].title}
            //         </a>
            //     </li>
            // );

            //속성값을 이용한 방법
            lists.push(
                <li key={data[i].id}>
                    {/* 각각의 리스트의 항목들은 key값이 필요함 */}
                    <a
                        href={"/content" + data[i].id}
                        data-id={data[i].id}
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    >
                        {data[i].title}
                    </a>
                </li>
            );

            i = i + 1;
        }

        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

export default TOC;
