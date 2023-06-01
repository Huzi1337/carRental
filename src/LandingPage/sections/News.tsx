import Card from "../../ReusableComponents/Card";
import Carousel from "../../ReusableComponents/Carousel";
import Button from "../../ReusableComponents/Button";
import { newPosts } from "../../assets/newsHeadline/newPosts";

import "./News.scss";

export const News = () => {
  const imageSliderPath = "/newCars";
  const imageHeadlinePath = "src/assets/newsHeadline";
  const imageCount = 4;

  return (
    <div id="#news" className="section news">
      <Carousel imagePath={imageSliderPath} imageCount={imageCount}></Carousel>
      <div className="container__horizontal">
        {newPosts.map((post, index) => (
          <Card
            src={imageHeadlinePath + `/car${index + 1}.png`}
            className="card__news"
            tint={false}
          >
            <h6>{post.content}</h6>
            <Button onClick={() => {}} className="btn__news">
              Read more
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
