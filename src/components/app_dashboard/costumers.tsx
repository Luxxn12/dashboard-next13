import { Avatar, Box, Divider, Grid, Group, Paper, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    id: 1,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 2,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 3,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 4,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 5,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 6,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 7,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
  {
    id: 8,
    image: "../dd.png",
    name: "Nadia Lumi",
    email: "@nadia",
  },
];

function Costumers() {
  return (
    <>
      <Box pt={5}>
        <Paper shadow="xl" withBorder radius={"md"}>
              <Box p={15}>
                <Text ta={"center"} fw={"bold"} fz={13}>
                  New Costumers
                </Text>
              </Box>
              <Box>
                <Divider pb={10} />
              </Box>
          {data.map((e) => (
            <Box key={e.id}>
              <Grid>
                <Grid.Col md={4} lg={4}>
                  <Box pl={20}>
                    <Avatar src={e.image} alt="it's me" size="sm" radius="xl" />
                  </Box>
                </Grid.Col>
                <Grid.Col md={8} lg={8}>
                  <Box>
                    <Text fz={13} fw={"bold"}>
                      {e.name}
                    </Text>
                    <Text mb={5} ta={"center"} color="dark.1" fz={10}>
                      {e.email}
                    </Text>
                  </Box>
                </Grid.Col>
              </Grid>
            </Box>
          ))}
        </Paper>
      </Box>
    </>
  );
}

export default Costumers;
