import { Avatar, Box, Divider, Group, Paper, Text } from "@mantine/core";
import React from "react";

function Costumers() {
  return (
    <>
      <Box pt={25}>
        <Paper shadow="xl" withBorder radius={"md"}>
          <Box p={30}>
            <Text ta={"center"} fw={"bold"} fz={18}>
              New Costumers
            </Text>
          </Box>
          <Box>
            <Divider pb={20} />
          </Box>
          <Group position="apart">
          <Box pl={20}>
            <Avatar src="../dd.png" alt="it's me" size="md" radius="xl" />
          </Box>
          <Box pr={20}>
          <Text  fw={"bold"}>
                {"Lisa Handayani"}
              </Text>
              <Text mb={5} color="dark.1" fz={13}>
                {"@Lisa"}
              </Text>
          </Box>
          </Group>
        </Paper>
      </Box>
    </>
  );
}

export default Costumers;
