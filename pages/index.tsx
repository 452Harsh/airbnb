import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"
import { AppProps } from 'next/app';

export default function Home({ exploreData,cardsData }:any) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }:any) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
          {cardsData?.map(({img,title}:any)=> (
            <MediumCard key={img} img = {img} title={title}/>
          ))}
          </div>
          
        </section>
        <section>
          <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          />
        </section>
        
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();
  const res1 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = await res1.json();
  return {
    props: {
      exploreData,
      cardsData
    },
  };
}
