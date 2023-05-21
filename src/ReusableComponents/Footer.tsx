import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="#contact">
      <img src="/src/assets/logo.svg" className="logo"></img>
      <nav>
        <a href="#home">Home</a>
        <a href="#payments">Payments</a> <a href="#privacy">Privacy Policy</a>
      </nav>
      <address>
        <span>Contact us</span>
        <br />
        +49 30 901820
        <br />
        office@carrent.com
      </address>
      <a href="https://twitter.com" className="twitter"></a>
      <a href="https://instagram.com" className="instagram"></a>
      <a href="https://facebook.com" className="facebook"></a>
    </div>
  );
};

export default Footer;
