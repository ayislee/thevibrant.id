import React from "react";
import styled from "styled-components";
import ImgNotFound from "../../asset/page/page-not-found.gif";

const NotFound = () => {
  return (
    <Container>
      <img src={ImgNotFound} alt="../../asset/page/page-not-found.gif" />
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
