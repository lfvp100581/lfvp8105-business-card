import styled from "styled-components";
import React from 'react';

export const Interests = () => {
  return (
    <IntereststInfo>
      <h4>Interests</h4>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga,
        ullam, nesciunt veritatis nostrum ipsa.
      </small>
    </IntereststInfo>
  )
}

const IntereststInfo = styled.div`
    text-align: justify;
    h4 {
        color: #fff;
        margin-top: 30px;
        margin-bottom: 5px;
    }
    small {
        color: #8e9aaf;
    }
    padding: 0px 45px;
`;