import BgColor from "@/fun/color";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Center,
  StarIcon,
  Stack,
  Paper,
  Box,
  TextInput,
  Button,
  Modal,
  FileButton,
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { BsCartPlus } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { TbFileExport } from "react-icons/tb";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai/react";
import TambahOrder from "./tambah_order";
import { FiFilter } from "react-icons/fi";
import FilterOrder from "./filter_order";
import { useState } from "react";
import ExportExcel from "./export_order";
import EditOrder from "./edit_order";
import NotifHapus from "./notif_hapus";

const val_modal_add_order = atomWithStorage("val_modal_add_order", false);
const val_modal_add_export = atomWithStorage("val_modal_add_export", false);
const val_modal_edit_table = atomWithStorage("val_modal_edit_table", false);

const data = [
  {
    id: 1,
    name: "Samsul",
    address: "jalan buana raya",
    date: "20 Oktober 2023",
    price: "2.000.000",
    image: "../dd.png",
  },
  {
    id: 2,
    name: "Rudi",
    address: "jalan angrek raya",
    date: "20 Oktober 2023",
    price: "2.000.000",
    image: "../dd.png",
  },
  {
    id: 3,
    name: "salmana",
    address: "jalan mawar raya",
    date: "20 Oktober 2023",
    price: "2.000.000",
    image: "../dd.png",
  },
  {
    id: 4,
    name: "roni",
    address: "jalan doa raya",
    date: "20 Oktober 2023",
    price: "2.000.000",
    image: "../dd.png",
  },
  {
    id: 5,
    name: "Samsul",
    address: "jalan gunung buntu",
    date: "20 Oktober 2023",
    price: "2.000.000",
    image: "../dd.png",
  },
];


const AppOrder = () => {
  const theme = useMantineTheme();
  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.image} radius={30} />
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={"violet.9"}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {item.address}
        </Badge>
      </td>
      <td>
        <Text>
        {item.date}
        </Text>
      </td>
      <td>
        <Text fz="sm" c="dimmed">
          {item.price}
        </Text>
      </td>
      <td>
        <Group spacing={0}>
          <ActionIcon>
            <IconPencil color={BgColor.ungu} onClick={() => setOpenEditTable(true)} size="1rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            {/* <IconTrash size="1rem" stroke={1.5} /> */}
            <NotifHapus/>
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  const [openAdd, setOpenAdd] = useAtom(val_modal_add_order);
  const [openExport, setOpenExport] = useAtom(val_modal_add_export);
  const [openEditTable, setOpenEditTable] = useAtom(val_modal_edit_table);


  return (
    <>
      <Group position="apart" pb={20} pt={10}>
        <Box>
          <TextInput w={400} icon={<HiOutlineSearch />} placeholder="Search" />
        </Box>
        <Box>
          <FilterOrder />
          <Button
            leftIcon={<TbFileExport size={15} />}
            mr={10}
            bg={BgColor.ungu}
            color="violet.9"
            onClick={() => setOpenExport(true)}
          >
            Export Order
          </Button>
          <Button
            onClick={() => setOpenAdd(true)}
            leftIcon={<BsCartPlus size={15} />}
            bg={BgColor.ungu}
            color="violet.9"
          >
            Add Order
          </Button>
        </Box>
      </Group>
      <Stack>
        <ScrollArea>
          <Paper p={20}>
            <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Price</th>
                  {/* <th>Action</th> */}
                  <th />
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Paper>
        </ScrollArea>
      </Stack>
      <ModalAdd />
      <ModalExportExcel/>
      <ModalEditTable/>
    </>
  );
};

export function ModalAdd() {
  const [openAdd, setOpenAdd] = useAtom(val_modal_add_order);
  return (
    <>
      <Modal
        opened={openAdd}
        onClose={() => setOpenAdd(false)}
        centered
        size={"md"}
        color={BgColor.ungu}
        title={
          <Text fw={"bold"} color={BgColor.ungu}>
            Add Order
          </Text>
        }
        radius={20}
      >
        <TambahOrder />
      </Modal>
    </>
  );
}
export function ModalExportExcel() {
  const [openExport, setOpenExport] = useAtom(val_modal_add_export);
  return (
    <>
      <Modal
        opened={openExport}
        onClose={() => setOpenExport(false)}
        centered
        size={"md"}
        color={BgColor.ungu}
        title={
          <Text fw={"bold"} color={BgColor.ungu}>
            Export Excel
          </Text>
        }
        radius={20}
      >
        <ExportExcel />
      </Modal>
    </>
  );
}
export function ModalEditTable() {
  const [openEditTable, setOpenEditTable] = useAtom(val_modal_edit_table);
  return (
    <>
      <Modal
        opened={openEditTable}
        onClose={() => setOpenEditTable(false)}
        centered
        size={"md"}
        color={BgColor.ungu}
        title={
          <Text fw={"bold"} color={BgColor.ungu}>
            Edit Order
          </Text>
        }
        radius={20}
      >
        <EditOrder />
      </Modal>
    </>
  );
}

export default AppOrder;
