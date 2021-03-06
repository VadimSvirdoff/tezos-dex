import Head from 'next/head'
import { VStack} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { Logo } from "../components/Logo";
import { Layout } from "../components/Layout";
import { Dashboard } from "../components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FA2 Tezos dApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Layout>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Logo w={100} h={100} />
              <Dashboard />
            </VStack>
          </Layout>
      
    </div>
  )
}
