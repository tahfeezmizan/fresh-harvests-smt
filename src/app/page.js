import AboutUs from "./components/Homepage/AboutUs";
import Banner from "./components/Homepage/Banner";
import Products from "./products/page";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <Products />
      <AboutUs />
    </div>
  );
}
