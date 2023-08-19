import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../../components/sidebar";
import PageTitle from "../../components/pageTitle";

const Skill: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skill</title>
      </Head>
      {/* <HStack>
        <Sidebar />
        <VStack h="100vh" w="85vw" fontSize="3rem" bg="#f1f0dd">
          <PageTitle text="SKILL" />

          <Tabs size="md">
            <TabList>
              <Tab>Language/Framework</Tab>
              <Tab>Other</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </HStack> */}
    </>
  );
};

export default Skill;
