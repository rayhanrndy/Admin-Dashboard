import Head from "next/head";
import SearchBox from "@/component/searchbox";
import Tabel from "@/component/tabel";
import { Container } from "@nextui-org/react";
import Layout from "@/component/Layout/index";

export default function Product() {
  return (
    <>
      <Head>
        <title>Admin | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container sm>
          <SearchBox />
          <Tabel />
        </Container>
      </Layout>
    </>
  );
}