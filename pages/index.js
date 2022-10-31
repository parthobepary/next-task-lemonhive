import Head from "next/head";
import EventShedul from "../components/landingPage/EventShedul";
import HeroSection from "../components/landingPage/HeroSection";

export default function Home() {
  return (
    // className={styles.container}
    <div>
      <Head>
        <title>dEMO-web-side</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-5 md:px-20">
        <HeroSection />
        <EventShedul />
      </main>
    </div>
  );
}
