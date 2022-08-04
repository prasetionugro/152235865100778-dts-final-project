import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");

  let params = useParams();

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=b8392bf1d3c848a3ac6ec984da8b4bbe`
      );
      // console.log(response.data);
      setDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name]);

  return (
    <div>
      <NavBar />
      <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
        </div>
        <Info>
          <Button
            className={activeTab === "instruction" ? "active" : ""}
            onClick={() => setActiveTab("instruction")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          {activeTab === "instruction" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h3>
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((item) => {
                return <li key={item.id}>{item.original}</li>;
              })}
            </ul>
          )}
        </Info>
      </DetailWrapper>
      <Footer />
    </div>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-bottom: 100px;
  display: flex;
  .active {
    background: linear-gradient(90deg, #00f28f, #00a1fb);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
