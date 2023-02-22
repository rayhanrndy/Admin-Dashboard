import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";

export default function App() {
  return (
    <Container sm>
      <Card css={{ $$cardColor: "#e1e3e6" }}>
        <Container gap={0}>
          <Row gap={1}>
            <Col>
              <Card css={{ $$cardColor: "transparant" }}>
                <Card.Body>
                  <Text h6 size={15} color="black" css={{ m: 0 }}>
                    User: Test
                  </Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card css={{ $$cardColor: "transparant" }}>
                <Card.Body>
                  <Text h6 size={15} color="black" css={{ m: 0 }}>
                    # of Items: 5
                  </Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Spacer y={1} />
          <Row gap={1}>
            <Col>
              <Card css={{ $$cardColor: "transparant" }}>
                <Card.Body>
                  <Text h6 size={15} color="black" css={{ m: 0 }}>
                    Added On: 20 Jan 2022
                  </Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card css={{ $$cardColor: "transparant" }}>
                <Card.Body>
                  <Text h6 size={15} color="black" css={{ m: 0 }}>
                    Total Amount
                  </Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
}
