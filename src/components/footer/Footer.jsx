import "./footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="img">
          <img src={Logo} alt="Naunihal Dhillon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
