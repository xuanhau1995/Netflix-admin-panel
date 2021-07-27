import React from "react";
import DashBoard from "./components/AllPages/DashBoard/DashBoard";
import SlideBar from "./components/SlideBar/SlideBar";
import Header from "./components/Header/Header";
import Customers from "./components/AllPages/Customers/Customers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomerDetails from "./components/AllPages/Customers/CustomerDetails/CustomerDetails";
import { Footer } from "./components/Footer/Footer";
import Movies from "./components/AllPages/Movies/ListMovies/Movies";
function TheLayout() {
  return (
    <>
      <Router>
        <div className="flex min-h-screen">
          <SlideBar />
          <div className="w-full">
            <Header />
            <div className="p-6">
              <Switch>
                <Route path="/" exact component={DashBoard} />
                <Route path="/customer" component={Customers} />
                <Route path="/customer:id" component={CustomerDetails} />
                <Route path="/movies" component={Movies} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </>
  );
}

export default TheLayout;
