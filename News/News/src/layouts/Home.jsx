import { Outlet } from "react-router";
import Header from "../components/Header";


const Home = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet>

                    </Outlet>
                </section>
                <section className="right-nav"></section>
            </main>

        </div>
    );
};

export default Home;