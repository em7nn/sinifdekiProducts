import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Components/AddPage/AddPage";
import Products from "../Components/Products/Products";
import ProductsView from "../Components/ProductsView/ProductsView";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
    {
        path: "/productsview/:id",
        element: <ProductsView/>,
    },
    {
        path: "/addpage",
        element: <AddPage/>,
    }
  ]);

  export {router} 