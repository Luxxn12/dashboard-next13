import {
  Avatar,
  Box,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { FaBell, FaUserAlt } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import RincianKeuangan from "./rincian_keuangan";

function AppDataKeuangan() {
  return (
    <>
      <Grid grow gutter="xl">
        <Grid.Col md={8} lg={8}>
          {/* DATA SATU */}
          <Box>
            <Paper h={50} shadow="md" radius="md">
              <Box p={6}>
                <TextInput placeholder={"Search"} />
              </Box>
            </Paper>
          </Box>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>
          {/* DATA DUA */}
          <Box>
            <Paper h={50} shadow="md" radius="md">
              <Group position="apart" pt={6}>
                <Box pl={20} pt={6}>
                  <FaBell size={20} color="#40128B" />
                </Box>
                <Box pr={20}>
                  <Group>
                    <Text fw={700}>Admin</Text>
                    <Avatar color="violet">
                      <FaUserAlt size="1.5rem" />
                    </Avatar>
                    <FiMoreVertical size={20} />
                  </Group>
                </Box>
              </Group>
            </Paper>
          </Box>
        </Grid.Col>
      </Grid>
      <Grid grow gutter={"xl"}>
        <Grid.Col md={8} lg={8}>
          {/* rincian keuangan */}
          <Box>
            <Box pt={20}>
              <RincianKeuangan />
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col md={4} lg={4}>

        </Grid.Col>
      </Grid>
    </>
  );
}

export default AppDataKeuangan;
