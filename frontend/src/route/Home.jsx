import Header from "../components/Header";
import HomeCategories from "../components/HomeCategories";
import RecentActivities from "../components/RecentActivities";
import HomeSliders from "../components/HomeSliders";

const Home = () => {
  return (
    <main>
      <Header />
      <HomeSliders />
      <RecentActivities />
      <HomeCategories />
      <HomeCategories />
      <HomeCategories />
    </main>
  );
};

export default Home;
