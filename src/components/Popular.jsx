import React, { useEffect, useState } from "react";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getRecipePopular();
  }, []);

  const getRecipePopular = async () => {
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=b8392bf1d3c848a3ac6ec984da8b4bbe&number=10"
      );
      setPopular(response.data.recipes);
      // console.log(response.data.recipes);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Recommendation</h3>
        <Splide options={{ perPage: 4, drag: "free", gap: "5rem" }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                    <p>{recipe.title}</p>
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
