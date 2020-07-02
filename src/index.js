import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "wix-style-react";
function text(children) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,.1)",
        width: "100%",
        height: "50px"
      }}
      children={children}
    />
  );
}
const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button>Button</Button>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>{text("<Col span={6}/>")}</Col>

        <Col xs={6}>{text("<Col span={6}/>")}</Col>
      </Row>

      <Row>
        <Col xs={8}>{text("<Col span={8}/>")}</Col>

        <Col xs={4}>{text("<Col span={4}/>")}</Col>
      </Row>

      <Row>
        <Col xs={6}>{text("<Col span={6}/>")}</Col>

        <Col xs={3}>{text("<Col span={3}/>")}</Col>

        <Col xs={3}>{text("<Col span={3}/>")}</Col>
      </Row>
    </Container>
  );
};

const root = document.getElementById("root");
console.log(root);

ReactDOM.render(<App />, root);
