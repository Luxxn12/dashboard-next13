import BgColor from "@/fun/color";
import { Box, Button, Stack, TextInput } from "@mantine/core";
import React from "react";

function EditOrder() {
  return (
    <>
      <Box pl={10} pb={10} pr={10}>
        <Stack>
          <TextInput radius={10} placeholder="Name" label="Name" withAsterisk />
          <TextInput
            radius={10}
            placeholder="Address"
            label="Address"
            withAsterisk
          />
          <TextInput radius={10} placeholder="Data" label="Data" withAsterisk />
          <TextInput
            radius={10}
            placeholder="Price"
            label="Price"
            withAsterisk
          />
        </Stack>

        <Button radius={10} fullWidth mt={20} bg={BgColor.ungu} color="violet.9">
          Edit Order
        </Button>
      </Box>
    </>
  );
}

export default EditOrder;
