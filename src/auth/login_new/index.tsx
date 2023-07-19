import Layout from "@/layout/layout";
import {
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
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiLock } from "react-icons/fi";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import BgColor from "@/fun/color";
import { useForm } from "@mantine/form"
import Swal, {} from "sweetalert2"
import { api } from "@/lib/api-backend";
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/light.css';
import { useRouter } from "next/navigation";

function LoginNew() {
  const router = useRouter()

  const formLogin = useForm({
    initialValues: {
      data: {
        email: "",
        password: ""
      }
    }
  })

  const ApiLogin = async () => {
    console.log(formLogin.values.data)
    if(Object.values(formLogin.values.data).includes("")) {
      return toast('Lengkapi Data Form', { theme: 'light' })
    }

    fetch('/api/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formLogin.values.data)
    }).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json()
        localStorage.setItem("user_id", data.id)
        toast("Sukses", {theme: "light"})
        router.push("/dashboard")
      } else {
        toast("Email atau Password salah", {theme: "light"})
      }
    })
  }

  return (
    <Layout>
      <Box
        sx={{
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
          <Paper radius="md" p="xl">
            <Stack spacing="lg" w={330}>
              <TextInput
                icon={<AiOutlineMail size={15} />}
                placeholder="Email"
                radius={"md"}
                {...formLogin.getInputProps("data.email")}
              />
              <PasswordInput
                icon={<FiLock size={15} />}
                placeholder="Password"
                radius={"md"}
                {...formLogin.getInputProps("data.password")}
              />
              <Button color="violet.9" bg={BgColor.ungu} radius={"md"} onClick={ApiLogin}>
                Login
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
                // onClick={() => signIn("google")}
              >
                Google
              </Button>
              <Button
                w={130}
                leftIcon={<AiOutlineGithub size={20} />}
                radius={"xl"}
                variant="default"
                color="gray"
                // onClick={() => signIn("github")}
              >
                Github
              </Button>
            </Group>
            <Group position="center">
              <Text color="dark.2" fz={12} align="center" mt={30}>
                Tidak memiliki akun?{" "}
                <Anchor fz={12} component="a" href="/register">
                  Register
                </Anchor>
              </Text>
            </Group>
          </Paper>
        </Flex>
      </Box>
    </Layout>
  );
}

export default LoginNew;
