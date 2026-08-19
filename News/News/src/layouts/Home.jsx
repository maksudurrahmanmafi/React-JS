import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto mt-4">
          <LatestNews />
        </section>

        <nav className="w-11/12 mx-auto mt-4">
          <Navbar />
        </nav>
      </header>

      <main>
        <section className="left-nav"></section>

        <section className="main">
          <Outlet />
        </section>

        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default Home;
