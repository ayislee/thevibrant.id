import React from "react";
import CardProductCatalog from "./card";

const Promo = (props) => {
  const {
    listProduct,
    display,
    background,
    tagline,
    tagline_color,
    watermark,
    watermark_degree,
    show_content,
    catalogue_product_type,
  } = props;

  return (
    <div
      className=" py-4"
      style={{ background: background ? background : "#fff" }}
    >
      <section>
        <div className="text-center text-white">
          <div
            style={{ color: tagline_color ? tagline_color : "#000" }}
            dangerouslySetInnerHTML={{ __html: tagline }}
          ></div>
        </div>
        <div className="mt-3">
          {display === "grid" ? (
            <div className="row">
              {listProduct.map((item, idx) => (
                <div key={idx} className="col-md-6 col-sm-12 mb-4">
                  <CardProductCatalog
                    displayText={show_content === 1 ? true : false}
                    degree={watermark_degree}
                    watermark={watermark}
                    item={item}
                    srcImage={item.catalogue_product_image}
                    catalogue_product_type={catalogue_product_type}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              {listProduct.map((item, idx) => (
                <div key={idx} className="col-12 mb-4">
                  <CardProductCatalog
                    displayText={false}
                    degree={watermark_degree}
                    watermark={watermark}
                    item={item}
                    srcImage={item.catalogue_product_image}
                    catalogue_product_type={catalogue_product_type}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Promo;

// const Card = styled.div`
//   background-color: #fff;
//   overflow: hidden;
//   box-shadow: 0 8px 20px 0 rgb(0 0 0 / 20%);
//   border-radius: 0.8rem;

//   .susbtext {
//     padding: 10px;
//     text-align: center;

//     .text {
//       font-weight: 700;
//       font-size: 14pt;
//       text-transform: uppercase;
//     }
//   }
// `;

// const ImageProduct = styled.img`
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
// `;
