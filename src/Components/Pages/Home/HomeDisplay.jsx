import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const HomeDisplay = () => {

      const {products} = useLoaderData()
      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 py-3 md:px-8 md:py-11">
                  {
                        products?.map(product => <Product key={product.id} product={product}></Product>)
                  }
            </div>
      );
};

export default HomeDisplay;