import BgColor from "@/fun/color";
import { Box, Button, Center, Group, Menu, Paper, Text } from "@mantine/core";
import React from "react";
import { FiFilter } from "react-icons/fi";
import { BiSolidUserPin } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdPriceChange } from "react-icons/md";

function FilterOrder() {
  return (
    <Menu>
      <Menu.Target>
        <Button leftIcon={<FiFilter size={15} />} mr={10} bg={BgColor.ungu}>
          Filter
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Paper p={10}>
          <Text mb="xs" fw={"bold"} color={BgColor.ungu}>
            Add Filter
          </Text>
          <Group>
            <Box>
              <Menu.Item bg={BgColor.ungu}>
                <Paper w={100} p={10} withBorder style={{ cursor: "pointer" }}>
                  <Center pb={10}>
                    <BiSolidUserPin size={20} />
                  </Center>
                  <Text ta={"center"} fw={"bold"}>
                    Name
                  </Text>
                </Paper>
              </Menu.Item>
            </Box>
            <Box>
              <Menu.Item bg={BgColor.ungu}>
                <Paper w={100} p={10} withBorder style={{ cursor: "pointer" }}>
                  <Center pb={10}>
                    <FaAddressCard size={20} />
                  </Center>
                  <Text ta={"center"} fw={"bold"}>
                    Address
                  </Text>
                </Paper>
              </Menu.Item>
            </Box>
          </Group>
          <Group pt={20}>
            <Box>
              <Menu.Item bg={BgColor.ungu}>
                <Paper w={100} p={10} withBorder style={{ cursor: "pointer" }}>
                  <Center pb={10}>
                    <BsCalendar2DateFill size={20} />
                  </Center>
                  <Text ta={"center"} fw={"bold"}>
                    Date
                  </Text>
                </Paper>
              </Menu.Item>
            </Box>
            <Box>
              <Menu.Item bg={BgColor.ungu}>
              <Paper w={100} p={10} withBorder style={{ cursor: "pointer" }}>
                <Center pb={10}>
                  <MdPriceChange size={20} />
                </Center>
                <Text ta={"center"} fw={"bold"}>
                  Price
                </Text>
              </Paper>
              </Menu.Item>
            </Box>
          </Group>
        </Paper>
      </Menu.Dropdown>
    </Menu>
  );
}

export default FilterOrder;
