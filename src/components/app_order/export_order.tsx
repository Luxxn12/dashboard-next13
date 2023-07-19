import BgColor from "@/fun/color";
import { Button, FileInput, Menu, Stack } from "@mantine/core";
import React from "react";

function ExportExcel() {
  return (
    <>
      <Stack>
        <FileInput radius={10} placeholder="Export Excel" />
        <Button fullWidth bg={BgColor.ungu} color="violet.9" radius={10}>
          Add Export
        </Button>
      </Stack>
    </>
  );
}

export default ExportExcel;
