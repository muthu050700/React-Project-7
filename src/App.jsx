import { Children } from "react";
import Header from "./Components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Components/Body/Body";
import Shop from "./Components/Shop/Shop";
import CartPage from "./Components/CartPage.jsx/CartPage";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import Accessories from "./Components/Accessories/Accessories";
import Pages from "./Components/Pages/Pages";
import Blog from "./Components/Blog/Blog";
const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
