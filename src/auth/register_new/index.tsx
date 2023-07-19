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
import { IoMdArrowBack } from "react-icons/io";
import Layout from "@/layout/layout";
import BgColor from "@/fun/color";
import { IconArrowBack } from "@tabler/icons-react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { useState } from "react";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/navigation";
import 'react-simple-toasts/dist/theme/light.css';

function RegisterNew() {
  const [konfirmasiPassword, setKonfirmasiPassword] = useState<string>()
  const [usernameMax, setUserNameMax] = useState<string | null>(null)
  const router = useRouter()
  const formRegister = useForm({
    initialValues: {
      data: {
        username: "",
        email: "",
        password: "",
      },
      validate: {
        email: (value: string) =>
          /^\S+@\S+$/.test(value) ? null : "Invalid email",
        username: (user: string) =>
          /^([a-zA-Z0-9])+([a-zA-Z0-9][._]?)*$/.test(user)
            ? null
            : "Invalid Username",
      },
    },
  });

  const ApiRegister = async () => {
    console.log(formRegister.values.data)
    if(Object.values(formRegister.values.data).includes("")) {
      return toast("Lengkapi Data Diri", {theme: "light"})
    }

    if (
      formRegister.values.validate.email(formRegister.values.data.email) != null
    ) {
      return toast("Invalid email", {theme: "light"})
    }

    if (formRegister.values.data.username.length >= 31) {
      return toast("Username max length is 30 characters.",{ theme:"light"});
    }
    if (formRegister.values.data.username.length <= 5) {
      return toast("Username min length is 6 characters.",{ theme:"light"});
    }
    if(formRegister.values.validate.username(
      formRegister.values.data.username)!=null
    ) {
      return (
        toast("Username harus berupa huruf, angka, titik, dan garis bawah.")
      )
    }

    if (formRegister.values.data.password.length < 8)
    return toast("Komfirmasi password salah", {theme: "light"})

    if(formRegister.values.data.password != konfirmasiPassword) {
      return toast("Konfirmasi password salah", {theme: "light"})
    }

    fetch(api.apiAuthRegister, {
      method : 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(formRegister.values.data)
    }).then(async (res) => {
      const data = await res.json()
      if (res.status === 201) {
        toast("Sukses. Silahkan Login", {theme: "light"})
        router.push("/login")
      } else {
        toast(data.message, {theme: "light"})
      }
    })
  }

  return (
    <>
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
            <Paper shadow="sm" radius="md" p="xl">
              <Stack spacing="lg" w={330}>
                <TextInput
                  icon={<AiOutlineUser size={15} />}
                  placeholder="Username"
                  radius={"md"}
                  description={
                    usernameMax && usernameMax.length < 6 ? (
                      <></>
                    ) : usernameMax && usernameMax.length > 30 ? (
                      <></>
                    ): ""
                  }
                  error={
                    usernameMax && usernameMax.length < 6 ? (
                      <Text color={BgColor.ungu}> Username Min 6 Karakter</Text>
                    ) : usernameMax && usernameMax.length > 30 ? (
                      <Text color={BgColor.ungu}>
                        Username Max 30 karakter
                      </Text>
                    ) : (
                      ""
                    )
                  }
                  required
                  onChange={(val) => {
                    if (val) {
                      setUserNameMax(val.currentTarget.value)
                      formRegister.values.data.username = val.currentTarget.value
                    }
                  }}
                />
                <TextInput
                  icon={<AiOutlineMail size={15} />}
                  placeholder="Email"
                  radius={"md"}
                  onChange={(val) => {
                    formRegister.values.data.email = val.currentTarget.value
                  }}
                />
                <PasswordInput
                  icon={<FiLock size={15} />}
                  placeholder="Password"
                  radius={"md"}
                  onChange={(val) => {
                    formRegister.values.data.password = val.currentTarget.value
                  }}
                />
                <PasswordInput
                  icon={<FiLock size={15} />}
                  placeholder="Konfirmasi Password"
                  radius={"md"}
                  onChange={(val) => setKonfirmasiPassword(val.target.value)}
                />
                <Button color="violet.9" bg={BgColor.ungu} radius={"md"}
                onClick={() => {
                  ApiRegister()
                  localStorage.setItem("username", formRegister.values.data.username)
                  localStorage.setItem("email", formRegister.values.data.email)
                  router.push("/login")
                }}
                >
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
