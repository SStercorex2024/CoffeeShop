import Banner from "@/sections/Banner";
import Dining from "@/sections/Dining";
import CapDecor from "@/sections/CapDecor";

export const metadata = {
  title: 'Home',
}

export default function () {
  return (<>
      <Banner/>
      <Dining/>
      <CapDecor/>
    </>
  )
}
