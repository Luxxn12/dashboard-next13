import { Box, Flex, Grid, Image, SimpleGrid } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import Lottie from "lottie-react"
import  animationData from './animation_lk0mqh87.json'

function Layout({ children }: PropsWithChildren) {
  return (
    <>
    <Box
    sx={{
      background: "radial-gradient(circle, rgba(67,4,120,1) 18%, rgba(65,4,117,1) 26%, rgba(59,4,107,1) 34%, rgba(0,0,0,1) 94%)",
      height: "100vh",
    }}>
        <Box>{children}</Box>

    </Box>
    </>
  );
}

export default Layout;
