import React from 'react'
import Navbar from "./shared/Navbar";
import HeroSection from '@/components/HeroSection';
import CategoryCarousal from './CategoryCarousel'; 
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';


const Home = () => {
  useGetAllJobs();
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
