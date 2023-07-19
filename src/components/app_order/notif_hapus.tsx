import BgColor from "@/fun/color";
import { Alert, Box, Button, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAlertCircle, IconTrash } from "@tabler/icons-react";
import { useAtom } from "jotai/react";
import { atomWithStorage } from "jotai/utils";
import React from "react";


function NotifHapus() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={500}
        withCloseButton={false}
      >
      <Box >
        <Alert
          icon={<IconAlertCircle size="2rem" />}
          title="APAKAH ANDA YAKIN UNTUK MENGHAPUS DATA?"
          color="violet.9"
          variant="outline"
        >
          <Group position="apart" p={20}>
            <Button w={150}color="red.9" onClick={close}>TIDAK</Button>
            <Button w={150} color="violet.9" bg={BgColor.ungu}>YA</Button>
          </Group>
        </Alert>
      </Box>
      </Modal>
      <Box onClick={open}>
      <IconTrash size="1rem" stroke={1.5} />
      </Box>
    </>
  );
}

export default NotifHapus;
