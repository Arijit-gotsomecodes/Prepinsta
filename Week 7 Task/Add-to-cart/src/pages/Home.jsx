import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import ScrollToTop from "../hooks/ScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "watch"
  );

  const bestSalesMobiles = products
    .filter((item) => item.category === "mobile")
    .slice(0, 2);

  const bestSalesWatches = products
    .filter((item) => item.category === "watch")
    .slice(0, 2);

  const bestSales = [...bestSalesMobiles, ...bestSalesWatches];

  ScrollToTop();

  return (
    <Fragment>
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
