import React, { Component } from "react";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0
    };
  }

  componentWillMount() {
    const allImgs = [
      "https://i.ytimg.com/vi/lmygBrAx0RE/maxresdefault.jpg",
      "https://images.autotrader.com/hn/c/bbb2b557c823469fbf5dfaea4add0437.jpg",
      "https://www.quattroworld.com/wp-content/gallery/rs-7-p/Audi-RS7-1-1.jpg",
      "https://www.quattrodaily.com/wp-content/uploads/2018/01/2018-detroid-auto-show-audi-a7-7468-1050x700.jpg",
      "https://i.ytimg.com/vi/njROGXHRs3E/maxresdefault.jpg",
      "https://i0.wp.com/www.carooza.com/wp-content/uploads/2018/06/AUDI-RS7-Carooza-4.jpg?fit=1024%2C683&ssl=1",
      "https://i.pinimg.com/originals/96/7f/69/967f69c3c43c0bde43917a1f6264ac1a.jpg"
    ];
    this.setState({
      allImgs: allImgs,
      currentImg: allImgs[this.state.currentIndex]
    });
  }
  loopedImages = () => {
    return this.state.allImgs.map((img, index) => {
      return (
        <div
          key={index}
          onClick={this.clickedThumb.bind(null, index)}
          className="thumb-img"
          style={{
            backgroundImage: `url('${img}')`
          }}
        />
      );
    });
  };
  nextBtn = () => {
    if (this.state.currentIndex !== this.state.allImgs.length - 1)
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
  };
  prevBtn = () => {
    if (this.state.currentIndex !== 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  };
  clickedThumb = index => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}>
              <i className="fas fa-chevron-left" />
            </div>
            <div className="arrows right-arrow" onClick={this.nextBtn}>
              <i className="fas fa-chevron-right" />
            </div>
            <div
              className="image-1"
              style={{
                backgroundImage: `url('${
                  this.state.allImgs[this.state.currentIndex]
                }')`
              }}
            />
          </div>
        </div>
        <div className="thumbnails">{this.loopedImages()}</div>
      </div>
    );
  }
}
