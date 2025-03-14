import AboutUs from "./components/Homepage/AboutUs";
import Banner from "./components/Homepage/Banner";
import Blogs from "./components/Homepage/Blogs";
import SpecialOffer from "./components/Homepage/SpecialOffer";
import Testimonial from "./components/Homepage/Testimonial";
import Products from "./products/page";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <Products />
      <AboutUs />
      <SpecialOffer />
      <Testimonial />
      <Blogs />
    </div>
  );
}
