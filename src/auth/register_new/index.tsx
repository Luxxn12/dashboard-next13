import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import Layout from "@/layout/layout";

function RegisterNew() {
  return (
    <>
      <Layout>
        <Box
          sx={{
            backgroundColor: "#468B97",
            height: "100vh",
          }}
        >
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            h={"100%"}
          >
            <Title color="white" style={{ textShadow: "1px 1px 1px black" }}>
              Welcome Back!
            </Title>
            <Paper shadow="sm" radius="md" p="xl">
              <Stack spacing="lg" w={330}>
                <TextInput
                  icon={<AiOutlineUser size={15} />}
                  placeholder="Username"
                  radius={"md"}
                />
                <TextInput
                  icon={<AiOutlineMail size={15} />}
                  placeholder="Email"
                  radius={"md"}
                />
                <PasswordInput
                  icon={<FiLock size={15} />}
                  placeholder="Password"
                  radius={"md"}
                />
                <PasswordInput
                  icon={<FiLock size={15} />}
                  placeholder="Konfirmasi Password"
                  radius={"md"}
                />
                <Button color="cyan.9" radius={"md"}>
                  Register
                </Button>
              </Stack>
              <Divider my="xs" label="or" labelPosition="center" pt={10} />
              <Group position="center" pt={10}>
                <Button
                  w={130}
                  leftIcon={<FcGoogle size={20} />}
                  radius={"xl"}
                  variant="default"
                  color="gray"
                >
                  Google
                </Button>
                <Button
                  w={130}
                  leftIcon={<AiOutlineGithub size={20} />}
                  radius={"xl"}
                  variant="default"
                  color="gray"
                >
                  Github
                </Button>
              </Group>
              <Group position="center">
                <Text color="dark.2" fz={12} align="center" mt={30}>
                  Sudah memiliki akun?{" "}
                  <Anchor fz={12} component="a" href="/login">
                    Login
                  </Anchor>
                </Text>
              </Group>
            </Paper>
          </Flex>
        </Box>
      </Layout>
    </>
  );
}

export default RegisterNew;
