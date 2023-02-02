
import { HomePageWrapper } from "@/components/home/Home.styled";
import Navbar from "@/components/Navbar/Navbar";
import HomeDescription from "@/components/home/HomeDescription/HomeDescription";
import HomePhoto from "@/components/home/HomePhoto/HomePhoto";
import HomeTags from "@/components/home/HomeTags/HomeTags";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Navbar />
      <HomePhoto/>
      <HomeDescription/>
      <HomeTags/>
    </HomePageWrapper>
  )
}
export default HomePage;