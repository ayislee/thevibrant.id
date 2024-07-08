import React from "react";
import styled from "styled-components";
import tokpedImg from "asset/logo/tokpedLogo.png";
import shopeeLogo from "asset/logo/shopeeLogo.png";
import igLogo from "asset/logo/Instagram-1.png";
import fbLogo from "asset/logo/Facebook-1.png";
import twitterLogo from "asset/logo/Twitter-1.png";
import telegramLogo from "asset/logo/telegramLogo.webp";
import ytLogo from "asset/logo/Youtube-1.png";
import tiktokLogo from "asset/logo/Tik Tok-1.png";
import linkedinLogo from "asset/logo/Linkedin-1.png";
import waLogo from "asset/logo/Whatsapp-1.png";
import LineLogo from "asset/logo/Line-1.png";
import EmailLogo from "asset/icon/email.png";
import WebsiteLogo from "asset/icon/www.png";

const dataToko = [
  {
    img: tokpedImg,
    text: "Tokopedia Official Store",
    key: "tokopedia",
  },
  {
    img: shopeeLogo,
    text: "Shopee Official Store",
    key: "shopee",
  },
  {
    img: igLogo,
    text: "Instagram Official Store",
    key: "instagram",
  },
  {
    img: fbLogo,
    text: "Facebook Official Store",
    key: "facebook",
  },
  {
    img: twitterLogo,
    text: "Twitter Official Store",
    key: "twitter",
  },
  {
    img: telegramLogo,
    text: "Telegram Official Store",
    key: "telegram",
  },
  {
    img: ytLogo,
    text: "Youtube Official Store",
    key: "youtube",
  },
  {
    img: tiktokLogo,
    text: "Tiktok Official Store",
    key: "tiktok",
  },
  {
    img: linkedinLogo,
    text: "LinkedIn Official Store",
    key: "linkedin",
  },
  {
    img: waLogo,
    text: "Whatsapp Official Store",
    key: "whatsapp",
  },
  {
    img: LineLogo,
    text: "Line Official Store",
    key: "line",
  },
  {
    img: null,
    text: "Email Us",
    key: "email",
  },
  {
    img: null,
    text: "Website",
    key: "website",
  },
];

const CardStore = (props) => {
  const { item } = props;

  const FilterTokoFunc = (itemData) => {
    console.log(dataToko.find((filter) => filter.key === itemData)?.img);
    return dataToko.find((filter) => filter.key === itemData)?.img;
  };

  console.log("ini item", item);

  if (FilterTokoFunc(item.catalogue_product_name)) {
    if (item.catalogue_product_name === "whatsapp") {
      return (
        <ContainerCard>
          <a
            href={
              item.catalogue_product_additional_json?.no_wa
                ? item.catalogue_product_additional_json?.no_wa
                : "#"
            }
            target={
              item.catalogue_product_additional_json?.no_wa ? "_blank" : null
            }
            // className="d-flex align-items-center"
          >
            <div className="logo-wrap">
              {FilterTokoFunc(item.catalogue_product_name) ? (
                <Logo
                  src={FilterTokoFunc(item.catalogue_product_name)}
                  alt={FilterTokoFunc(item.catalogue_product_name)}
                  className="logo"
                />
              ) : null}
            </div>
            <TextTitle className="text">
              {item.catalogue_product_additional_json?.label}
            </TextTitle>
          </a>
        </ContainerCard>
      );
    }
    return (
      <ContainerCard className="">
        <a
          href={
            item.shortened?.shortened_full_url
              ? item.shortened?.shortened_full_url
              : "#"
          }
          target={item.shortened?.shortened_full_url ? "_blank" : null}
          // className="d-flex align-items-center"
        >
          <div className="logo-wrap">
            {FilterTokoFunc(item.catalogue_product_name) ? (
              <Logo
                src={FilterTokoFunc(item.catalogue_product_name)}
                alt={FilterTokoFunc(item.catalogue_product_name)}
                className="logo"
              />
            ) : null}
          </div>
          <TextTitle className="text">
            {item.catalogue_product_additional_json?.label}
          </TextTitle>
        </a>
      </ContainerCard>
    );
  } else {
    return (
      <ContainerCard>
        <a
          href={
            item.catalogue_product_additional_json?.email
              ? `mailto:${item.catalogue_product_additional_json?.email}`
              : item.catalogue_product_name === "website"
              ? `${item.shortened?.shortened_full_url}`
              : "#"
          }
          className="d-flex align-items-center"
          target={item.catalogue_product_name === "website" ? "__blank" : ""}
        >
          <div className="logo-wrap">
            <Logo
              src={
                item.catalogue_product_name === "website"
                  ? WebsiteLogo
                  : EmailLogo
              }
              alt={
                item.catalogue_product_name === "website"
                  ? WebsiteLogo
                  : EmailLogo
              }
              className="logo"
            />
          </div>
          <TextTitle className="text">
            {item.catalogue_product_additional_json?.label}
          </TextTitle>
        </a>
      </ContainerCard>
    );
  }
};

export default CardStore;

const TextTitle = styled.div`
  margin-left: 20px;
  font-weight: 600;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const ContainerCard = styled.div`
  background-color: #fff;
  border: thin solid #dede;
  overflow: hidden;
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 20%);
  border-radius: 9999px;
  cursor: pointer;
  min-height: 50px;
  padding: 5px 0px;
  a {
    display: flex;
    align-items: center;

    .logo-wrap {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .logo-wrap,
    .text {
      flex: 1;
    }
  }
`;
