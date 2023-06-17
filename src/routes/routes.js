import CategoryContainer from "../components/pages/category/CategoryContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: HomeContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: CategoryContainer,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: LoginContainer,
  },
  {
    id: "register",
    path: "/register",
    Element: RegisterContainer,
  },
];
