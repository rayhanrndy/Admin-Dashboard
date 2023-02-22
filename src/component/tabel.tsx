import { Container, Table, Pagination } from "@nextui-org/react";

export default function Tabel() {
  return (
    <Container>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          Width: "100px",
        }}
      >
        <Table.Header>
          <Table.Column>Product Name</Table.Column>
          <Table.Column>Brand</Table.Column>
          <Table.Column>Price</Table.Column>
          <Table.Column>Stock</Table.Column>
          <Table.Column>Category</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Tony Reichert</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>Active</Table.Cell>
            <Table.Cell>Active</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
            <Table.Cell>Active</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
          <Table.Row key="5">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination total={10} initialPage={1} />
    </Container>
  );
}
