import { Box, Button, Flex, Group, Image, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { FcBiohazard, FcMultipleDevices } from "react-icons/fc";
// import lottie from 'lottie-web';
// import { defineElement } from 'lord-icon-element';
// defineElement(lottie.loadAnimation);
import Lottie from "lottie-react"
import  animationData from './5lgjgFX3SE.json'

function Home() {
  return (
    <>
    
      <Box
        sx={{
          backgroundColor: "#C2DEDC",
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
            <Lottie animationData={animationData}/>
            
            <Button w={200} variant="subtle" radius="xl" component="a" href="/login">LOGIN</Button>
          </Flex>
      </Box>
    </>
  );
}

export default Home;
