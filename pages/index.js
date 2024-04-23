import Header from '../components/Header'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import SixthSection from '../components/SixthSection'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box w='full' h='full'>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </Box>
  )
}
