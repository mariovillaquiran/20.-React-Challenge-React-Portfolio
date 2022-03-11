import portfolio1 from "../../images/portfolio1.png";
import portfolio2 from "../../images/portfolio2.png";
import portfolio3 from "../../images/portfolio3.png";
import portfolio4 from "../../images/portfolio4.png";

function Portfolio() {
  return (
    <div>
      <h1> PORTFOLIO</h1>
      <img class="portfolio-1" src={portfolio1} alt="Portfolio 1" />
      <img class="portfolio-2" src={portfolio2} alt="Portfolio 2" />
      <img class="portfolio-3" src={portfolio3} alt="Portfolio 3" />
      <img class="portfolio-4" src={portfolio4} alt="Portfolio 4" />{" "}
    </div>
  );
}
export default Portfolio;
