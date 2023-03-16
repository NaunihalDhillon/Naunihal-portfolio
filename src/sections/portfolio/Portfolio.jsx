import "./portfolio.css";
import data from "./data";
import Card from "../Portfolio_card/Card";

const Portfolio = () => {
  return (
    <section className="portfolio_container top" id="portfolio">
      <div className="container">
        <div className="heading text-center">
          <h4>My Projects</h4>
        </div>

        <div className="content grid">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                link={item.github}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
