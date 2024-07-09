import React from "react";
import Preview from "../components/Preview";
import Featured from "../components/Featured";
import NewItem from "../components/NewItem";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Preview />
      <Featured />
      <NewItem />
      <Footer />
    </div>
  );
};

export default HomePage;
