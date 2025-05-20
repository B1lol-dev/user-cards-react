import Container from "@/components/helpers/Container";
import React from "react";

const NotFound = () => {
  return (
    <section>
      <Container className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-7xl font-semibold">404</h1>
        <p className="text-2xl mt-2">
          The page you looking for is not found :(
        </p>
      </Container>
    </section>
  );
};

export default React.memo(NotFound);
