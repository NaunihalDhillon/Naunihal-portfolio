import "./experience.css";
import data from "./data";

const Experience = () => {
  return (
    <section id="resume" className="section-resume top">
      <div className="page-heading">
        <h2 data-shadow="Resume">Resume</h2>
      </div>
      <div className="exp_container">
        {/* <!--Experience Column Start--> */}
        <div className="exp-left">
          <div className="sub-heading">
            <h3>Experience</h3>
          </div>

          {/* <!--experience timeline start--> */}
          <ul className="experience timeline">
            {/* <!--timeline item--> */}

            {data.map((item) => {
              return (
                <li className="event" key={item.id}>
                  <h4>{item.title}</h4>
                  <h5>
                    <span className="date">{item.year}</span>
                    <span className="company">{item.company}</span>
                  </h5>
                  <p>{item.responsibility}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <!--Experience Column End--> */}

        {/* <!--Education Column Start--> */}
        <div className="exp-right">
          <div className="sub-heading">
            <h3>Experience</h3>
          </div>

          {/* <!--education timeline start--> */}
          <ul className="education timeline">
            {/* <!--timeline item--> */}
            <li className="event">
              <h4>I&C Engineer</h4>
              <h5>
                <span className="date">September 2013 - August 2014</span>
                <span className="company">Wipro informatics</span>
              </h5>
              <p>
                Worked with Wipro informatics on the I&C project of Samsung 4G,
                Vodafone 2G, and microwave. Installation, Commissioning, and
                integration of GSM and Microwave sites. Deployment and
                operations management on LTE, 4G, 3G, 2G Networks
              </p>
            </li>

            {/* <!--timeline item--> */}
            <li className="event">
              <h4>IT Support Engineer</h4>
              <h5>
                <span className="date">July 2012 - July 2013</span>
                <span className="company">
                  ICybergenie Technical Services Pvt ltd
                </span>
              </h5>
              <p>
                Resolving complicated computer problems into effective and
                long-lasting solutions. Optimizing other resources to increase
                overall PC performance and speed up processing time & RAM.
                Offering entire wireless support, PC optimization, internet
                set-up, network support and ISP configuration.
              </p>
            </li>

            <li className="event">
              <h4>Implementation Engineer</h4>
              <h5>
                <span className="date">December 2010 - October 2013</span>
                <span className="company">ZTE Telecom</span>
              </h5>
              <p>
                Looked after entire O & M-related activities for SMSC and USSD
                servers. Implemented and supported SMSC & USSD server nodes in
                the MTS project. Worked on the LTE expansion of MTS Pan India
              </p>
            </li>
          </ul>
          {/* <!--education timeline end--> */}
        </div>
        {/* <!--Education Column End--> */}
      </div>
    </section>
  );
};

export default Experience;
