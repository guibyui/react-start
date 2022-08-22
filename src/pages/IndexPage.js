import React, { useState } from "react";

import Container from "../components/Container";
import DefaultButton from "../components/DefaultButton";
import DefaultInput from "../components/DefaultInput";

const IndexPage = () => {
  const [input, setInput] = useState("");
  const handleSubmit = () => {};

  const handleInputChange = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      <Container title="React Starter!">
        <form onSubmit={handleSubmit}>
          <DefaultInput
            inputContainerStyle=""
            labelStyle=""
            label="This is the Label"
            placeholder="Write Here"
            inputStyle=""
            name="title"
            value={input}
            onChange={handleInputChange}
          />
          <DefaultButton to="/" className="">
            Click Me!
          </DefaultButton>
        </form>
      </Container>
    </>
  );
};

export default IndexPage;
