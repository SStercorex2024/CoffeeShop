import Banner from "@/sections/Banner";
import Dining from "@/sections/Dining";

export const metadata = {
  title: 'Home',
}

export default function () {
  return (<>
      <Banner/>
      <Dining/>
    </>
  )
}
