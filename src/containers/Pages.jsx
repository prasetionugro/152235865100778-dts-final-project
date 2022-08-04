import React from "react";
import Cuisine from "./Cuisine";
import SearchResult from "./SearchResult";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import ProtectedComponents from "../components/ProtectedComponents";

const Pages = () => {
  return (
    <Routes>
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<SearchResult />} />
      <Route
        path="/recipe/:name"
        element={
          <ProtectedComponents>
            <Recipe />
          </ProtectedComponents>
        }
      />
    </Routes>
  );
};

export default Pages;
