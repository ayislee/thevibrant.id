import React from "react";
import styled from "styled-components";
import MediaCartzLogo from "asset/logo/BlackPowered2.png";

const Footer = () => {
  return (
    <Container className="px-5">
      <a href="https://www.mediacartz.com" target="__blank">
        <img src={MediaCartzLogo} alt={MediaCartzLogo} />
      </a>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  max-height: 40px;
  width: 100%;
  overflow: hidden;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 200px;
  }
  .text {
    font-weight: 600;
  }
`;
