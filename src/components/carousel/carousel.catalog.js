import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import {
  ChevronCompactLeft,
  ChevronCompactRight,
} from "@styled-icons/bootstrap";

export const CarouselCatalog = (props: { ArrImage: Array }) => {
  const [current, setCurrent] = useState(0);
  const length = props.ArrImage?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    let timer1 = setTimeout(
      () => setCurrent(current === length - 1 ? 0 : current + 1),
      5000
    );
    return () => {
      clearTimeout(timer1);
    };
  });

  if (!Array.isArray(props.ArrImage) || props.ArrImage?.length <= 0) {
    return null;
  }

  return (
    <Container>
      <button className="left-arrow" onClick={prevSlide}>
        <ChevronCompactLeft />
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <ChevronCompactRight />
      </button>
      {props.ArrImage?.map((item, idx) => {
        return (
          <a
            key={idx}
            target={item.shortened?.shortened_full_url ? "_blank" : null}
            href={item.shortened?.shortened_full_url ? item.shortened?.shortened_full_url : "#"}
          >
            <Slide active={idx === current ? true : false} key={idx}>
              {idx === current && (
                <img
                  className="image"
                  src={item.catalogue_product_image}
                  alt={item.catalogue_product_image}
                />
              )}
              {/* {idx === current && (
                <div>
                  <div
                    style={{
                      fontWeight: "700",
                      textTransform: "UPPERCASE",
                      color: "#000",
                    }}
                  >
                    {item.catalogue_product_name}
                  </div>
                  <div className="subheading">
                    {item.catalogue_product_description}
                  </div>
                </div>
              )} */}
            </Slide>
          </a>
        );
      })}
    </Container>
  );
};

const Slide = styled.div`
  transition-duration: 1s ease;
  transition-duration: 1s;
  transform-origin: 0% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -1rem !important;
  margin-right: -1rem !important;

  ${({ active }) =>
    active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
  .subheading {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #fff;
  }
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 20%);
  border-radius: 1rem;

  .left-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
    font-size: 1.2rem;
    border: none;
    font-weight: 800;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    opacity: 0.5;
    transition: 300ms;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3px;
    font-size: 1.2rem;
    border: none;
    font-weight: 800;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    opacity: 0.5;
    transition: 300ms;
  }
`;

CarouselCatalog.defaultProps = {
  ArrImage: [],
};

CarouselCatalog.propTypes = {
  ArrImage: PropTypes.array.isRequired,
};
