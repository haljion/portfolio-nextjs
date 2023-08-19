import { Grid } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const Sidebar: NextPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="15vw"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Grid item xs={3}>
        <Link href="/" as="/">
          <a>TOP</a>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link href="/aboutme" as="/aboutme">
          <a>ABOUTME</a>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link href="/skill" as="/skill">
          <a>SKILL</a>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link href="/portfolio" as="/portfolio">
          <a>PORTFOLIO</a>
        </Link>
      </Grid>
    </Grid>

    // <Flex
    //   color="#6d7d7f"
    //   bg="#b5d2dd"
    //   h="100vh"
    //   w="15vw"
    //   fontSize="2rem"
    //   // textAlign="center"
    // >
    //   <Center>
    //     <VStack>

    //     </VStack>
    //   </Center>
    // </Flex>
  );
};

export default Sidebar;
