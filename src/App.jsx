/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./pages/account/account";
import Details from "./pages/details/details";
import Filter from "./pages/filter/filter";
import Header from "./components/header";
import Home from "./pages/home/home";
import NoPageFound from "./pages/error/notFound";
import PostBlog from "./pages/editor/postBlog";
import Search from "./pages/search/search";
import SignIn from "./pages/account/signIn";
import SignUP from "./pages/account/signUP";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./pages/account/verifyEmail";
import { addLoggedInUser } from "./app/features/othersSlice";
import { getItemWithKey } from "./utils/storedItems";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const indexPath = "veronia";
const App = () => {
  const dispatch = useDispatch();

  const user = getItemWithKey("user");
  useEffect(() => {
    if (user) {
      dispatch(addLoggedInUser(user));
    }
  }, [user]);

  return (
    <SkeletonTheme baseColor="#302f2f" highlightColor="#444">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={`/${indexPath}/search/:query`} element={<Search />} />
          <Route path={`/${indexPath}/verify/:id`} element={<VerifyEmail />} />
          <Route path={`/${indexPath}/detail/:id`} element={<Details />} />
          <Route path={`/${indexPath}/filter/:tagName`} element={<Filter />} />
          <Route exact path={`/${indexPath}`} element={<Home />} />
          <Route
            path={`/${indexPath}/post`}
            element={user?._id ? <PostBlog /> : <Home />}
          />
          <Route path={`/${indexPath}/sign-in`} element={<SignIn />} />
          <Route path={`/${indexPath}/sign-up`} element={<SignUP />} />
          <Route path={`/${indexPath}/profile`} element={<Account />} />
          <Route path={`*`} element={<NoPageFound page={true} />} />
        </Routes>

        <Toaster
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </BrowserRouter>
    </SkeletonTheme>
  );
};
export default App;
