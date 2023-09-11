import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    SetAsin: "",
  };

  changeAsin = (asin) => {
    return this.setState({ setAsin: asin });
  };

  render() {
    return (
      <Container>
        <MyNav />
        {/* <MyJumbotron /> */}
        {/* <AllTheBooks /> */}
        <Row>
          <Col xs={6}>
            <BookList books={fantasy} asinMethod={this.changeAsin} />
          </Col>

          <Col xs={6}>
            <CommentArea />
          </Col>
        </Row>

        <MyFooter />
      </Container>
    );
  }
}

export default App;
