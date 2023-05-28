import Footer from "../ReusableComponents/Footer";
import Navbar from "../ReusableComponents/Navbar";
import Card from "../ReusableComponents/Card";
import Container from "../ReusableComponents/Container";
import RentForm from "./RentForm";
import Confirmation from "./Confirmation";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Booking = () => {
  const step = useSelector((state: RootState) => state.booking.currentStep);

  return (
    <>
      <Container className="container__booking">
        <Navbar></Navbar>
        <Card className="card__booking" tint={false}>
          {step != 4 ? <RentForm /> : <Confirmation />}
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Booking;
