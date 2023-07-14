import { Box, Flex, Grid, Image, SimpleGrid } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import Lottie from "lottie-react"
import  animationData from './animation_lk0mqh87.json'

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        <Box>{children}</Box>
        <Box>
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            h={"100%"}
          >
            {/* <Image src={"/data1.jpg"} alt="img" width={600} /> */}
            <Lottie animationData={animationData}/>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Layout;
