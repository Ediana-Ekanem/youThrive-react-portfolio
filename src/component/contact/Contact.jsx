import React, { Suspense } from "react";

const Container = React.lazy(() => import("../container/Container"));
const Divider = React.lazy(() => import("../divider/Divider"));
const Footer = React.lazy(() => import("../footer/Footer"));
const Form = React.lazy(() => import("../form/Form"));
const Heading = React.lazy(() => import("../heading/Heading"));
const Title = React.lazy(() => import("../tittle/Title"));

const Contact = () => {
  return (
    <div>
      <div className="bg-[#e4e4e4] pt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Title text="Contact" />
            <Heading
              text="Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
              finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
              viverra facilisis ut ac est."
            />
            <Divider />
            <Form />
          </Container>
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Contact;
