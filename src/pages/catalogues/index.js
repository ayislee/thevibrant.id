import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowUpCircleFill } from "@styled-icons/bootstrap";
import * as Services from "../../service";
import * as Util from "../../utils";
import Banner from "./banner";
import Promo from "./promo";
import Sosmed from "./sosmed";
import Header from "./header";
import Product from "./product";
import Footer from "./footer";
import About from "./aboutUs";
import MarketPlace from "./marketPlace";
import { Helmet } from "react-helmet-async";

const api = Services.Method;

export default function Catalogues() {
  const [data, setData] = useState({});
  const [positionCatalog, setPositionCatalog] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = window.location.pathname.replace("/", "");

  Util.useTitle(`${pathname}`);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  window.addEventListener("scroll", handleScroll);

  const GetData = async () => {
    // console.log(`catalogue/slug/${match?.params?.slug}`);
    // if (pathname) {
      await Promise.all([
        api
        .get(`/catalogue/slug/vibrant-indonesia`)
          // .get(`/catalogue/slug/${pathname}`)
          .then((res) => {
            console.log("ni res", res);
            if (res?.data?.success) {
              setData(res?.data?.data);
              setPositionCatalog(
                res?.data?.data?.catalogue_product_type_position
              );
            }
          })
          .catch((err) => alert(`${err?.message}`)),
      ]);
    }
  // };

  useEffect(() => {
    GetData();
  }, []);

  const generateProductByType = (type, id) => {
    return data?.catalogue_product?.filter(
      (filter) =>
        filter.catalogue_product_type === type &&
        filter.catalogue_product_additional_json?.content_id === id
    );
  };



  return (
    <Container>
      <Helmet>
        <title>{pathname}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Cartz ID" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content={window.location.origin} />
        <meta property="og:title" content={pathname} />
        <meta property="og:description" content="Catalogue" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      {positionCatalog.map((item, idx) => {
        if (item.catalogue_product_type === "HEADER") {
          if (item.active === 1) {
            return (
              <Header
                backgroundColor={item?.background}
                text={item?.text}
                text_color={item?.text_color}
                image={data?.catalogue_image}
                position_header={
                  item.header_position ? item.header_position : "left"
                }
                key={idx}
              />
            );
          }
        } else if (item.catalogue_product_type === "BANNER") {
          if (item.active === 1) {
            return (
              <Banner
                listProduct={generateProductByType(
                  item.catalogue_product_type,
                  item.id
                )}
                backgroundColor={item.background}
                key={idx}
              />
            );
          }
        } else if (item.catalogue_product_type === "CONTENT") {
          if (item.active === 1) {
            return (
              <About
                backgroundColor={item.background}
                text_color={item.text_color}
                title={item.title}
                text={item.text}
                key={idx}
              />
            );
          }
        } else if (item.catalogue_product_type === "MARKETPLACE") {
          if (item.active === 1) {
            return (
              <MarketPlace
                background={item.background}
                text={item.text}
                text_color={item.text_color}
                key={idx}
                listData={generateProductByType(item.catalogue_product_type)}
              />
            );
          }
        } else if (item.catalogue_product_type === "SOCIAL_MEDIA") {
          if (item.active === 1) {
            return (
              <Sosmed
                text={item.text}
                text_color={item.text_color}
                listData={generateProductByType(item.catalogue_product_type)}
                key={idx}
              />
            );
          }
        } else if (item.catalogue_product_type === "PROMO") {
          if (item.active === 1) {
            return (
              <Promo
                display={item.display}
                show_content={item.show_content}
                background={item.background}
                tagline={item.tagline}
                tagline_color={item.tagline_color}
                watermark={item.watermark}
                watermark_degree={item.watermark_degree}
                listProduct={generateProductByType(
                  item.catalogue_product_type,
                  item.id
                )}
                key={idx}
                catalogue_product_type={item.catalogue_product_type}
              />
            );
          }
        } else if (item.catalogue_product_type === "PRODUCT") {
          if (item.active === 1) {
            return (
              <Product
                watermark={item.watermark}
                watermark_degree={item.watermark_degree}
                tagline={item.tagline}
                tagline_color={item.tagline_color}
                display={item.display}
                background={item.background}
                show_content={item.show_content}
                listData={generateProductByType(
                  item.catalogue_product_type,
                  item.id
                )}
                key={idx}
                active={item.active}
              />
            );
          }
        }
      })}

      <div style={{ paddingTop: "70px" }}>
        {/* <Footer /> */}
      </div>

      {/* to top */}

      {scrollPosition >= 1000 && (
        <button
          className="btn"
          style={{
            bottom: "45px",
            right: "0px",
            position: "fixed",
            color: "#6798d1"
          }}
          onClick={() => window.scrollTo(0, 0, "smooth")}
        >
          <ArrowUpCircleFill width={40} />
        </button>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  section {
    width: 42rem;
    margin: auto;
  }

  @media (orientation: portrait) {
    section {
      width: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
