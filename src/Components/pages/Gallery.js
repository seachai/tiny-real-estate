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
      "https://i.pinimg.com/originals/15/47/56/154756661de9143535e666c588c1bdbf.jpg",
      "https://i0.wp.com/decorits.com/wp-content/uploads/2019/02/Luxury-Tiny-Home-Plans-Via-plougonver.com-.jpg?fit=1280%2C720&ssl=1",
      "http://birbudhu.org/wp-content/uploads/2019/01/modern-tiny-house-design-amazing-modern-tiny-house-plans-or-modern-design-small-house-pictures-best-small-modern-adorable-modern-modern-small-home-designs-india.jpg",
      "https://i.pinimg.com/originals/a2/3f/92/a23f92eed520e096deeba46c5f3133b1.jpg",
      "https://www.bluezoowriters.com/wp-content/uploads/2017/05/Modern-Tiny-House-Builders.jpg",
      "https://i.pinimg.com/736x/79/24/47/79244784291bb7b598062cdf37ab994d--tiny-houses-ideas-small-houses.jpg",
      "http://chibas-bioenergy.org/wp-content/uploads/2017/12/modern-tiny-houses-for-sale-prfabricat-rtrat-rsinc-modern-tiny-house-for-sale-uk-modern-small-homes-for-sale.jpg",
      "https://www.bluezoowriters.com/wp-content/uploads/2017/06/Modern-Tiny-House-Plans.jpg",
      "http://rambhamidi.me/wp-content/uploads/2018/07/tiny-houses-modern-posted-house-listings-modern-tiny-houses-for-sale-texas.jpg"
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
