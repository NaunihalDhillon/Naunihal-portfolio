import Card from "./Card-exp";
import "./experience.css";
import data from "./data";

const Experience = () => {
  return (
    <section className="experience__container top" id="experience">
      <div className="container">
        <div className="heading">
          <h2>Experience</h2>
        </div>

        <div className="content-section mtop d_flex">
          <div className="content">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  company={item.company}
                  year={item.year}
                  responsibility={item.responsibility}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// <div className="experience">
//   <ul className="exp_list">
//     <li class="event">
//       <h4>Lead UI Designer</h4>
//       <h5>
//         <span class="date">2017-2018</span>
//         <span class="company">Big Design Company, NY, USA</span>
//       </h5>
//       <p>
//         Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis
//         eveniet provident neque Ea ratione non minus.
//       </p>
//     </li>
//   </ul>
// </div>;
