import "./features.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Features = () => {
  return (
    <section className="features top" id="features">
      <div className="container">
        <div className="heading">
          <h4>Features</h4>
          <h2>What I Do</h2>
        </div>

        <div className="content grid">
          <div className="box btn_shadow">
            <img src="" alt="" />
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto saepe minus autem illum. Aliquid maiores, consectetur
              enim voluptas vitae ratione ducimus. Iste, eveniet?
            </p>
            <a href="/">
              <AiOutlineArrowRight className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
