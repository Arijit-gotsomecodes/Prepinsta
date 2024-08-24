import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/thank-you.css";
import { Link } from "react-router-dom";
const ThankYou = ({ fullName }) => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank You {fullName}</h1>
              <h3>Your tour is booked.</h3>

              <Button className="btn primary__btn">
                <Link to={"/home"}> Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
