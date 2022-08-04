import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b8392bf1d3c848a3ac6ec984da8b4bbe&cuisine=${name}`
      );
      // console.log(response.data.results);
      setCuisine(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);

  return (
    <div>
      <NavBar />
      <h3>{params.type} Cuisine</h3>
      <Grid>
        {cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  padding-bottom: 150px;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
