import SlideShow from "../components/slideshow";
import IntroCard from "../cards/Home_Introcard";
import history from "../images/history.png";
import Platform from "../cards/platform_option";
import "./home.css";
import Review from "../cards/reviews_card";
import Courses from "../components/courses";
import BrandList from "../components/brands_list";

const Home = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            {/* intro cart imported and added here  */}
            <IntroCard />
          </div>
          <div className="col-sm-12 col-md-4 p-5">
            <SlideShow />
          </div>
        </div>
        {/* creating the scroll indicator */}
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <img
              id="scroll"
              src="https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif"
              alt="Please scroll down"
            />
          </div>
          <div className="col-4"></div>
        </div>
        {/* adding the company history png file here  */}
        <div className="row">
          <div className="col-12">
            <img id="history" src={history} alt="data not loaded " />
          </div>
        </div>

        {/* importing the platform card here  */}
        <Platform />
        {/* importing and adding the reviews card here  */}
        <Review />
        <BrandList />
        <Courses />
      </div>
    </div>
  );
};
export default Home;
