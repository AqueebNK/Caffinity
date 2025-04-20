import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const text = document.querySelector(".txt");
      const paragraph = document.querySelector(".content p");
      const button = document.querySelector(".content .btn");

      if (window.scrollY > 100) {
        text?.classList.add("shrink");
        paragraph?.classList.add("shrink");
        button?.classList.add("shrink");
      } else {
        text?.classList.remove("shrink");
        paragraph?.classList.remove("shrink");
        button?.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="headerig">
        <div className="content">
          <h1 className="txt">Start Your Day With a <br /> Coffee Freshment!</h1>
          <p>Coffee is one of the best thing to give a fresh start to your day with energy.<br /> So go for a cup of Coffee.</p>
          <button type="button" className="btn-hdr"><Link to="/recipes" className="getrecp">Get Recipes!</Link></button>
        </div>
      </div>
    </>
  );
};

export default Home;