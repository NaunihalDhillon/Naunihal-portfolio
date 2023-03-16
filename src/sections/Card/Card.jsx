import "./card.css";

const Card = ({ id, title, icon, desc }) => {
  return (
    <div className="info-item btn_shadow">
      <div className="box">
        <div className="icon-box">
          <div className="icon">{icon}</div>
        </div>
        <h4 className="title">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
