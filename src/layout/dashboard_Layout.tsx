import { PropsWithChildren, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
} from "@mantine/core";
import { FcBriefcase, FcBullish, FcTwoSmartphones } from "react-icons/fc";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          height={"100vh"}
          bg={"#533393"}
        >
          <Navbar.Section grow>
            <a 
              href="/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Group mt={20}>
                <FcBriefcase size={20} />
                <Text color="white">Dashboard</Text>
              </Group>
            </a>
            <a
              href="/dashboard/data_keuangan"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Group mt={20}>
                <FcBullish size={20} />
                <Text color="white">Data Keuangan</Text>
              </Group>
            </a>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md" bg={"#0C134F"}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
                color={theme.colors.gray[1]}
                mr="xl"
              />
            </MediaQuery>
            <Group>
            <FcTwoSmartphones size={40} />
              <Text fw={700} fz={30} color="white">BIP</Text>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
