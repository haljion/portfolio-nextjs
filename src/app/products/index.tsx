import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../../components/sidebar";
import PageTitle from "../../components/pageTitle";

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* <HStack bgColor="#b5d2dd" h="100vh" w="100vw">
        <Sidebar />
        <VStack h="95vh" w="100vw" color="#6d7d7f" fontSize="3rem">
          <PageTitle text="PORTFOLIO" />
        </VStack>
      </HStack> */}
    </>
  );
};

export default Portfolio;
