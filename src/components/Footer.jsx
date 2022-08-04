import React from "react";
import styled from "styled-components";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIconContainter>
        <AiOutlineTwitter />
        <AiFillFacebook />
        <AiOutlineMail />
        <AiOutlineInstagram />
      </FooterIconContainter>
      <FooterTextContainer>
        <p>© Copyright Prasetio Nugroho</p>
      </FooterTextContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #00f28f, #00a1fb);
  height: 100px;
`;

const FooterIconContainter = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: white;
    margin: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
const FooterTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: white;
  }
`;

export default Footer;
