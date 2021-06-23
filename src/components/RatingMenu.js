import {Component} from 'react'
import JumboTron from "./JumboTron";
import Rating from "./Rating";
import { Button } from "react-bootstrap";

import "../css/stylesGeneral.css";

class RatingMenu extends Component {
  render() {
    // const IsValid = true;
    const IsValid = false;
    return (
      <div>
        <JumboTron>
          This is a long text that will extends more than a few steps. A people,
          a lot of people that have sleep yesterday
        </JumboTron>
        <Rating rating="1" />
        <Rating rating="5" />
        <Rating rating="3" />
        <Rating rating="2" />
        <Rating rating="4" />
        <Button variant="primary" disabled={!IsValid}>
          Default
        </Button>
      </div>
    );
  }
}
export default RatingMenu