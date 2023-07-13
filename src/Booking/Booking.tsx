import Footer from "../ReusableComponents/Footer";

import Card from "../ReusableComponents/Card";
import Container from "../ReusableComponents/Container";
import RentForm from "./RentForm";
import Confirmation from "./Confirmation";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Booking = () => {
  const store = useSelector((state: RootState) => state.booking);
  const { isComplete } = store;

  return (
    <>
      <Container className="container__booking">
        <Card className="card__booking" tint={false}>
          {!isComplete ? <RentForm initialValues={store} /> : <Confirmation />}
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Booking;
