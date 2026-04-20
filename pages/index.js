import React from 'react'

import Conduct from '../components/organisms/Conduct'
import Hero from '../components/organisms/Hero'
import Navbar from '../components/organisms/Navbar'
import Newsletter from '../components/organisms/Newsletter'
import Speakers from '../components/organisms/Speakers'
import Team from '../components/organisms/Team'
import What from '../components/organisms/What'
import Sponsors from '../components/organisms/Sponsors'

import { speakers, team, sponsors } from '../utils/constants'

const Home = () => (
  <>
    <Navbar />
    <Newsletter />
    <Hero />
    <Speakers speakers={speakers} />
    <What />
    <Sponsors sponsors={sponsors} />
    <Team team={team} />
    <Conduct />
  </>
)

export default Home
