import { Navbar, Link, Text, Dropdown } from "@nextui-org/react";

export default function SideBar() {
  const collapseItems = ["Product"];
  const collapseItems2 = ["Cart"];

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle />
        <Text b color="inherit" hideIn="xs">
          ADMIN
        </Text>
      </Navbar.Brand>

      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            css={{
              color: index === collapseItems.length - 1 ? "$primary" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
                minHeight: "auto",
              }}
              href="/product"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}

        {collapseItems2.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            css={{
              color: index === collapseItems2.length - 1 ? "$primary" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
                minHeight: "auto",
              }}
              href="/detail"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
