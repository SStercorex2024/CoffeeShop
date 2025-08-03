import Banner from "@/sections/Banner"
import Dining from "@/sections/Dining"
import CapDecor from "@/sections/CapDecor"
import PopularMenu from "@/sections/PopularMenu"
import ExclusiveCoffee from "@/sections/ExclusiveCoffee"
import About from "@/sections/About"
import Questbook from "@/sections/Questbook"
import Services from "@/sections/Services"

export const metadata = {
  title: "Home",
}

export default function () {
  return (
    <>
      <Banner />
      <Dining />
      <CapDecor />
      <PopularMenu />
      <ExclusiveCoffee />
      <About />
      <Questbook />
      <Services />
    </>
  )
}
