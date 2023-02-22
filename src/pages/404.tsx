import SideBar from "@/component/sidebar";
import { Container, Card, Row, Text } from "@nextui-org/react";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Customs404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <SideBar />
      <Container xl>
        <Card css={{ $$cardColor: "#ffffff" }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h6 size={"$7xl"} color="black" css={{ m: "$4xl" }}>
                404 - Looks like you’re lost.
              </Text>
            </Row>
            <Row justify="center" align="center">
              <Text h6 size={"$lg"} color="black" css={{ m: 0 }}>
                Maybe this page used to exist or you just spelled something
                wrong.
              </Text>
            </Row>
            <Row justify="center" align="center">
              <Text h6 size={"$lg"} color="black" css={{ m: 0 }}>
                Chances are you Spelled something wrong, so you can double check
                the URL?
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
