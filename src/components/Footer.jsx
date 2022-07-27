import styled from "styled-components";
import React from 'react';

export const Footer = () => {
  return (
    <FutterBox>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-square-instagram"></i>
      <i class="fa-brands fa-square-github"></i>
    </FutterBox>
  )
}

const FutterBox = styled.footer`
margin-top: 20px;
    background-color: #00171f;
    height: 50px;
    border-radius: 0 0 10px 10px;
    color: #8e9aaf;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin: 0px 10px;
    }
`;


