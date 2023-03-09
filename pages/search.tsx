import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard"
import Map from "../components/Map";

function Search({searchResults}:any) {
  const router = useRouter();
  const { location, startDate , endDate,noOfGuest}=router.query;
  const formattedStartDate = startDate && format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = endDate && format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`} />
      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuest} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800  whitespace-nowrap">
            <p className="button">Cacellation Flexibility</p>
            <p className="button">Type of places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More Filter</p>
          </div>
          {searchResults.map(({img,location,title,description,star,price,total}:any) => (
            <InfoCard 
            img = {img}
            location = {location}
            title={title}
            description = {description}
            star={star}
            price={price}
            total={total}
            />
          ))}
        </section>
        <section className="hidden xl:inline-flex">
          <Map/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res=>res.json());
  return {
    props : {
      searchResults,
    }
  }
}
