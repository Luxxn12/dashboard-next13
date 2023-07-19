import { PropsWithChildren, useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
  AppShell,
  useMantineTheme,
  Header,
  MediaQuery,
  Burger,
  Text,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineBriefcase, HiOutlineShoppingCart } from "react-icons/hi";
import { FcTwoSmartphones } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import BgColor from "@/fun/color";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  { link: "/dashboard", label: "Dashboard", icon: LuLayoutDashboard },
  {
    link: "/dashboard/order",
    label: "Order",
    icon: HiOutlineShoppingCart,
  },
  {
    link: "/dashboard/data_keuangan",
    label: "Data Keuangan",
    icon: HiOutlineBriefcase,
  },

];

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('');
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.currentTarget.target();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} size={20} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <AppShell
      styles={{
        main: {
          background: "radial-gradient(circle, rgba(67,4,120,1) 18%, rgba(65,4,117,1) 26%, rgba(59,4,107,1) 34%, rgba(0,0,0,1) 94%)"
            // theme.colorScheme === "dark"
            //   ? theme.colors.dark[8]
            //   : theme.colors.dark[9],
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
          // height={"100vh"}
          bg={"white"}
        >
          <Navbar.Section grow>{links}</Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <a href="/" className={classes.link}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span onClick={() => {
                // localStorage.removeItem("username")
              }}>Logout</span>
            </a>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md" style={{
          background: "radial-gradient(circle, rgba(67,4,120,1) 18%, rgba(65,4,117,1) 26%, rgba(59,4,107,1) 34%, rgba(0,0,0,1) 94%)"
        }}>
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
              <Text component="a" href="/" fw={700} fz={30} color="white">
                BIP
              </Text>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
