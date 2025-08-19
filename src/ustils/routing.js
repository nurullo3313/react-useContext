import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "../Pages/ProductsPage";
import CartPage from "../Pages/CartPage";
import NotFound from "../Pages/NotFound";

export const routing = createBrowserRouter([
    {
        path : "/",
        element : <ProductsPage/>
    },
    {
        path: "/cart",
        element : <CartPage/>
    },
    {
        path : "*",
        element :<NotFound/>
    }
])