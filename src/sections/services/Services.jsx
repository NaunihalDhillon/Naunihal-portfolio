import Card from "../Card/Card";
import "./services.css";
import data from "./data";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="heading">
          <h4>Services</h4>
          <h2>What I Do</h2>
        </div>
        <div className="content grid">
          {data.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                icon={item.icon}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
