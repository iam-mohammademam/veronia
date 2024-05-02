import LandingPage from "./landingPage";
import SearchBar from "../../components/searchBar";
import SideDiv from "./sideDiv";
import Trendings from "./trendings";
import { indexPath } from "../../App";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `${
      indexPath?.charAt(0)?.toUpperCase() +
      indexPath?.slice(1, indexPath?.length)
    } - Homepage`;
  }, []);

  return (
    <>
      <div className="md:hidden w-4/5 mx-auto mt-5">
        <SearchBar />
      </div>
      <div className="flex w-screen md:px-[10%] px-[5%] md:flex-nowrap gap-y-10 flex-wrap mt-5">
        <div className="md:w-2/3 w-full shrink-0 md:border-r md:pr-4 pt-2">
          <LandingPage />
        </div>
        <div className="w-full pl-4 pt-2">
          <SideDiv />
          <Trendings />
        </div>
      </div>
    </>
  );
};
export default Home;
