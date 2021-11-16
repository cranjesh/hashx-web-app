import React from "react";

import ReactPageScroller from "react-page-scroller";
import Image from "./Image";

import "./index.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "seinheiser"
  },
  {
    src: "https://images.unsplash.com/photo-1491927570842-0261e477d937?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "bose"
  },
  {
    src: "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "sony"
  }
]

export default class PageScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };


  render() {
    return (
      <div className="demo-page-contain">
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth * 0.98}
          containerHeight={window.innerHeight * 0.98}
          customPageNumber={this.state.currentPage}
        >
          {
            images.map(img=><Image src={img.src} title={img.title}/>)
          }
        </ReactPageScroller>
      </div>
    );
  }
}
