import { Input, Grid } from "@nextui-org/react";

export default function SearchBox() {
  return (
    <Grid.Container justify="flex-end" css={{ paddingRight: "$10" }}>
      <Grid>
        <Input placeholder="Search Product" type="search" />
      </Grid>
    </Grid.Container>
  );
}
