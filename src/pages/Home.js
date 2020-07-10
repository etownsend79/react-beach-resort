import React from 'react';
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import { Link } from "react-router-dom"



const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title="Luxurious Rooms" subtitle="Rooms starting at $149">
          <Link to="/rooms" className="btn-primary">our rooms</Link>
        </Banner>
      </Hero>


    </>
  )
}



export default Home

