import React from "react";
import * as Component from "components";
import { generatorColor } from "../../utils";

const Banner = (props) => {
  const { listProduct, backgroundColor } = props;

  return (
    <React.Fragment>
      {listProduct.length > 0 && (
        <div
          className="py-3"
          style={{
            background: backgroundColor ? backgroundColor : generatorColor(),
          }}
        >
          <section>
            <Component.Carousel.CarouselCatalog ArrImage={listProduct} />
          </section>
        </div>
      )}
    </React.Fragment>
  );
};

export default Banner;
