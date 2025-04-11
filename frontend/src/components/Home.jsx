import React from 'react'
import Navbar from "./shared/Navbar";
import HeroSection from '@/HeroSection';
import CategoryCarousal from './CategoryCarousel'; 
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousal/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
