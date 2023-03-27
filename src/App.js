import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { PopularBlogs } from "./components/PopularBlogs";
import { FeaturedBlogs } from "./components/FeaturedBlogs";
import { RightPlace } from "./components/RightPlace";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PopularBlogs />
      <FeaturedBlogs />
      <RightPlace />
      <Footer />
    </div>
  );
}

export default App;
