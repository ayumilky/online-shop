import { Outlet } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preivew.component";
import Directory from "../../components/directory/directory.component";
import ServiceBanner from "../../components/servicebanner/service-banner.component";
import Banner from "../../components/banner/banner.component";
import Newsletter from "../../components/newsletter/newsletter.component";
function Home() {
  return (
    <div>
      <Directory />
      <Banner />
      <ServiceBanner />
      <Newsletter />
      {/* <CategoriesPreview /> */}
      <Outlet />
    </div>
  );
}

export default Home;
