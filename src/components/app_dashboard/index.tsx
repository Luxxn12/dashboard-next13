import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import Sales from "./sales";
import Costumers from "./costumers";
import BgColor from "@/fun/color";
import { useShallowEffect } from "@mantine/hooks";
import { sUser } from "@/global_state/g_state";
import { api } from "@/lib/api-backend";

function AppDataDashboard() {

  // useShallowEffect(() => {
  //   const user = localStorage.getItem("user_id");
  //   console.table(user)
  //   if (!user) {
  //     sUser.value = [];
  //   } else {
  //     fetch(api.apiGetOneUser + `?id=${user}`)
  //       .then((v) => (sUser.value = v));
  //   }
  // }, []);
  return (
    <>
      <Box pt={20}>
        <Grid grow gutter="md">
          <Grid.Col md={10} lg={10}>
            {/* DATA SATU */}
            <Box>
              <Grid>
                <Grid.Col md={6} lg={3}>
                  <Paper shadow="xl" withBorder radius={"md"}>
                    <Box pl={20} pr={20} pt={20} pb={10}>
                      <Group position="apart">
                        <Text fz={25} fw={"bold"}>
                          128
                        </Text>
                        <AiOutlineRise color="green" size={30} />
                      </Group>
                      <Text color="dark.1" fz={13} mt={5}>
                        New Orders
                      </Text>
                    </Box>
                    <Box p={10}>
                      <Button
                        bg={BgColor.ungu}
                        color="violet.9"
                        fullWidth
                        rightIcon={<BsArrowRight />}
                      >
                        View More
                      </Button>
                    </Box>
                  </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                  <Paper shadow="xl" withBorder radius={"md"}>
                    <Box pl={20} pr={20} pt={20} pb={10}>
                      <Group position="apart">
                        <Text fz={25} fw={"bold"}>
                          54
                        </Text>
                        <AiOutlineFall color="red" size={30} />
                      </Group>
                      <Text color="dark.1" fz={13} mt={5}>
                        New Users
                      </Text>
                    </Box>
                    <Box p={10}>
                      <Button
                        bg={BgColor.ungu}
                        color="violet.9"
                        fullWidth
                        rightIcon={<BsArrowRight />}
                      >
                        View More
                      </Button>
                    </Box>
                  </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                  <Paper shadow="xl" withBorder radius={"md"}>
                    <Box pl={20} pr={20} pt={20} pb={10}>
                      <Group position="apart">
                        <Text fz={25} fw={"bold"}>
                          77
                        </Text>
                        <AiOutlineRise color="green" size={30} />
                      </Group>
                      <Text color="dark.1" fz={13} mt={5}>
                        Bounce Rate
                      </Text>
                    </Box>
                    <Box p={10}>
                      <Button
                        bg={BgColor.ungu}
                        color="violet.9"
                        fullWidth
                        rightIcon={<BsArrowRight />}
                      >
                        View More
                      </Button>
                    </Box>
                  </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={3}>
                  <Paper shadow="xl" withBorder radius={"md"}>
                    <Box pl={20} pr={20} pt={20} pb={10}>
                      <Group position="apart">
                        <Text fz={25} fw={"bold"}>
                          128
                        </Text>
                        <AiOutlineFall color="red" size={30} />
                      </Group>
                      <Text color="dark.1" fz={13} mt={5}>
                        Unique Visitors
                      </Text>
                    </Box>
                    <Box p={10}>
                      <Button
                        bg={BgColor.ungu}
                        color="violet.9"
                        fullWidth
                        rightIcon={<BsArrowRight />}
                      >
                        View More
                      </Button>
                    </Box>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Box>
          </Grid.Col>
          <Grid.Col md={2} lg={2}>
            {/* DATA DUA */}
            <Box>
              <Paper
                h={180}
                w={"100%"}
                p={10}
                shadow="xl"
                withBorder
                radius={"md"}
              >
                <Group position="center" pt={23} pb={10}>
                  <Avatar src="../dd.png" alt="it's me" size="lg" radius="xl" />
                </Group>
                <Text ta={"center"} fw={"bold"}>
                {localStorage.getItem("email")}
                </Text>
                <Text mb={5} ta={"center"} color="dark.1" fz={13}>
                {localStorage.getItem("username")}
                </Text>
              </Paper>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>

      {/* FEATURE KEDUA */}
      <Grid>
        <Grid.Col md={10} lg={10}>
          <Sales />
        </Grid.Col>
        <Grid.Col md={2} lg={2}>
          <Costumers />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default AppDataDashboard;
