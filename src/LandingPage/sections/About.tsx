import "./About.scss";

export const About = () => {
  return (
    <div id="#about" className="section about">
      <h4>About Us</h4>
      <div className="brandStory">
        <h1>Together on the road for 20 years.</h1>{" "}
        <h4>
          As a modern and constantly evolving company, we have utilized our
          extensive experience and passion for cars to establish a distinctive
          car rental service that caters to premium vehicles.
        </h4>
      </div>
      <div className="newsletter">
        <h3>Subscribe to the newsletter!</h3>
        <button>Sign up</button>
      </div>
    </div>
  );
};
