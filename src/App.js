import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Chatwindow from "./components/Chatwindow";
import Userwindow from "./components/Userwindow";
import {Container, Row, Col } from "react-bootstrap"
function App() {
  return (
    <div>
      <Row className="w-100 m-0 p-0">
        <Col xs={9} className="m-0 p-0">
        <Chatwindow/>
        </Col>
        <Col xs={3} className="m-0 p-0">
        <Userwindow/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
