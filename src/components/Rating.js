import { Component } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating,
    };

    // this.state = {rating: 0};
  }

  handleClick(ratingValue) {
    this.setState({ rating: ratingValue });
  }

  render() {
    return (
      <div style={styles.starStyle}>
        {/* <h1>Rating: {this.props.rating}</h1> */}
        <h1>Rating: {this.state.rating}</h1>
        {/* {this.props.rating >=1 ? (<IoIosStar />):(<IoIosStarOutline />)} */}
        {this.state.rating >= 1 ? (<IoIosStar onClick={this.handleClick.bind(this, 1)} />) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />)}
        {this.state.rating >= 2 ? (<IoIosStar onClick={this.handleClick.bind(this, 2)} />) : (<IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />)}
        {this.state.rating >= 3 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 3)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
        )}
        {this.state.rating >= 4 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 4)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />
        )}
        {this.state.rating >= 5 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 5)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />
        )}
        <h5 style={style2.reviewStyle}>{this.props.numOfReviews}</h5>
      </div>
    );
  }
}

export default Rating;

const styles = { starStyle: { color: "orange" } };
const style2 = { reviewStyle: {
                   display: "inline",
                   padding:"0 0 0 10px",
                   color:"black",
                  }
                };
