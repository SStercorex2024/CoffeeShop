import Banner from "@/sections/Banner"
import Dining from "@/sections/Dining"
import CapDecor from "@/sections/CapDecor"
import PopularMenu from "@/sections/PopularMenu"
import ExclusiveCoffee from "@/sections/ExclusiveCoffee"
import About from "@/sections/About"
import Questbook from "@/sections/Questbook"
import Services from "@/sections/Services"
import Contact from "@/components/Contact"
import ScrollProgress from "@/components/ScrollProgress"

export const metadata = {
  title: "Home",
}

export default function () {
  return (
    <>
      <ScrollProgress />
      <Banner />
      <Dining />
      <CapDecor />
      <PopularMenu />
      <ExclusiveCoffee />
      <About />
      <Questbook />
      <Services />
      <Contact />
    </>
  )
}
