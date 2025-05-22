import React from 'react'
import HomeBannerSlider from '../../components/home_components/banner section/HomeBannerSlider'
import StartGroupSection from '../../components/home_components/start own group section/StartGroupSection'
import Working from '../../components/home_components/working/Working'
import FeaturedGroups from '../../components/home_components/featured groups section/FeaturedGroups'

const Home = () => {
  return (
    <div >
      <HomeBannerSlider />
      <FeaturedGroups/>
      <StartGroupSection />
      <Working/>
    </div>
  )
}

export default Home