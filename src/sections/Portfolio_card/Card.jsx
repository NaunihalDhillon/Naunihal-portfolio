import "./card.css";

const Card = ({ title, image, github }) => {
  return (
    <div className="portfolio_item btn_shadow">
      <div className="image-box">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h4 className="title">{title}</h4>
      </div>

      <a href={github} className="link">
        Learn More
      </a>
    </div>
  );
};

export default Card;
