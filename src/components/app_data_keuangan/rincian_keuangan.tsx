import {
  Box,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import Income from "./echart/income";

const Datatable = [
  {
    id: "1",
    name: "Samsung",
    income: "60%",
  },
  {
    id: "2",
    name: "Apple",
    income: "80%",
  },
  {
    id: "3",
    name: "Nokia",
    income: "10%",
  },
  {
    id: "4",
    name: "Asus",
    income: "50%",
  },
  {
    id: "5",
    name: "Motorola",
    income: "10%",
  },
];

function RincianKeuangan() {
  const data1 = Datatable.map((v) => (
    <tr key={v.id}>
      <td>{v.id}</td>
      <td>{v.name}</td>
      <td>
        <Text fw={700}>{v.income}</Text>
      </td>
    </tr>
  ));

  return (
    <>
      <Paper p={20} shadow="md" radius="md">
        <Grid gutter="xl">
          <Grid.Col md={4} lg={4}>
            <TextInput placeholder="Search" />
            <Group pt={10}>
              <Table verticalSpacing="sm">
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>Name</th>
                    <th>Income</th>
                  </tr>
                </thead>
                <tbody>{data1}</tbody>
              </Table>
            </Group>
          </Grid.Col>
          <Grid.Col md={8} lg={8}>
            <Grid>
              <Grid.Col md={8} lg={8}>
                <Box>
                  <Text>Apple 13 Pro</Text>
                  <Group spacing="xs" pt={10}>
                    <MdLocationOn color="#40128B" />
                    <Text fz={13}>Jl. Gunung Anthena 1, Denpasar, Bali</Text>
                  </Group>
                </Box>
              </Grid.Col>
              <Grid.Col md={4} lg={4}>
                <Group position="center">
                  <Image width={100} src={"..//apple.png"} alt="phone" />
                </Group>
              </Grid.Col>
            </Grid>
            <Box pt={20}>
              <Group spacing="xs">
                <ImEarth size={20} color="#40128B" />
                <Text color="#40128B" fw={700}>
                  Statistic on Map
                </Text>
              </Group>
              <Box pt={5}>
                <Box
                  sx={{
                    border: "thin solid #5C469C",
                    borderRadius: 5,
                  }}
                >
                  <SimpleGrid
                    cols={3}
                    breakpoints={[
                      { maxWidth: 980, cols: 2, spacing: "xl" },
                      { maxWidth: 755, cols: 1, spacing: "xl" },
                    ]}
                  >
                    <Income/>
                  </SimpleGrid>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
}

export default RincianKeuangan;
