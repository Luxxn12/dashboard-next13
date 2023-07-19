import BgColor from "@/fun/color";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Flex,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import { FcTwoSmartphones } from "react-icons/fc";
import Lottie from "lottie-react";
import animationData from "./K1kfVxpQDG.json";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.blue[9],
      borderRadius: 5,
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

const Home = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(67,4,120)",
          background:
            "radial-gradient(circle, rgba(67,4,120,1) 18%, rgba(65,4,117,1) 26%, rgba(59,4,107,1) 34%, rgba(0,0,0,1) 94%)",
          height: "100vh",
        }}
      >
        <Box pb={120} p={10} pl={20} pr={20}>
          <Group position="apart" sx={{ height: "100%" }}>
            <Group>
              <Text fw={700} fz={30} color="white">
                BIP
              </Text>
            </Group>
            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <a href="#" className={classes.link}>
                <Text fw={700} color="white">
                  Product
                </Text>
              </a>
              <a href="#" className={classes.link}>
                <Text fw={700} color="white">
                  Company
                </Text>
              </a>
              <a href="#" className={classes.link}>
                <Text fw={700} color="white">
                  Blog
                </Text>
              </a>
              <a href="#" className={classes.link}>
                <Text fw={700} color="white">
                  Pricing
                </Text>
              </a>
            </Group>

            <Group className={classes.hiddenMobile}>
              <Button bg={"white"} color="gray.0" fw={700}>
               <Text color="dark" component="a" href="/login"> Log in</Text>
              </Button>
              <Button bg={"#430478"} component="a" href="/register" color="violet.9">
                Sign up
              </Button>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
              color="white"
            />
          </Group>
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            className={classes.hiddenDesktop}
            zIndex={1000000}
          >
            <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
              <Divider
                my="sm"
                color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
              />

              <a href="#" className={classes.link} color="dark">
                Product
              </a>
              <a href="#" className={classes.link} color="dark">
                Company
              </a>
              <a href="#" className={classes.link} color="dark">
                Blog
              </a>
              <a href="#" className={classes.link} color="dark">
                Pricing
              </a>

              <Divider
                my="sm"
                color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
              />

              <Group position="center" grow pb="xl" px="md">
                <Button variant="default" >Log in</Button>
                <Button bg={BgColor.ungu} color="violet.9">Sign up</Button>
              </Group>
            </ScrollArea>
          </Drawer>
          <Container size="35rem" px={0}>
            <Group position="center">
              <Lottie animationData={animationData} />
            </Group>
          </Container>
          <Group position="center">
            <Text ta={"center"} fw={700} fz={40} color="white">
              Build models you can{" "}
            </Text>
            <Text ta={"center"} fw={700} fz={40} style={{ textShadow: "1px 1px 1px white" }}>
              trust
            </Text>
          </Group>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(67,4,120)",
          background:
            "radial-gradient(circle, rgba(67,4,120,1) 18%, rgba(65,4,117,1) 26%, rgba(59,4,107,1) 34%, rgba(0,0,0,1) 94%)",
          height: "100vh",
        }}
      ></Box>
    </>
  );
};

export default Home;
