import "./card-exp.css";

const Card = ({ title, company, year, responsibility }) => {
  return (
    <div class="box btn_shadow">
      <div className="title_content d_flex">
        <div className="title">
          <h2>{company}</h2>
          <h3>{title}</h3>
          <span>{year}</span>
        </div>
      </div>
      <hr />
      <p>{responsibility}</p>
    </div>
  );
};

export default Card;
