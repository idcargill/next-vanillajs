import Head from 'next/head';
import { PageContainer } from '../../styles/StyleSheets/PageContainer.css';

const Home = () => (
  <>
    <Head>
      <title>Project Starter</title>
      <meta content="Generated by create next app" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <main className={PageContainer}></main>
  </>
);
export default Home;