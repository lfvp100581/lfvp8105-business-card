import React from 'react';
import PhotoPerfil from '../assets/photoPerfil.jpg';
import styled from 'styled-components';

export const Info = () => {
  return (
    <InfoBox>
        <Img src={PhotoPerfil} alt="Foto Luis"/>
        <h1>Luis Velasquez</h1>
        <p>Frontend Developer</p>
        <small>lfvp8105.website</small>
        <ButtonBox>  
            <ButtonEmail><i class="fa-solid fa-envelope"></i>Email</ButtonEmail>
            <ButtonLinkedin><i class="fa-brands fa-linkedin"></i>LinkedIn</ButtonLinkedin>
        </ButtonBox>
    </InfoBox>
  )
}

const Img = styled.img`
    width: 100%;
    border-radius: 8px 8px 0 0;
`;

const InfoBox = styled.div`
    font-family: 'Roboto', sans-serif;
    h1 {
        color: #fff;
        margin-top: 5px;
    }
    p {
        color: #d5bdaf;
        margin-top: -20px;
    }
    small {
        color: #8e9aaf;
    }
`;

const ButtonEmail = styled.button`
    background-color: #fff;
    padding: 8px 20px;
    border: none;
    margin-right: 5px;
    border-radius: 5px;
    i {
        margin-right: 8px;
    }
`;


const ButtonLinkedin = styled.button`
    background-color: #0B66C2;
    color: #fff;
    padding: 5px 20px;
    border: none;
    margin-left: 5px;
    border-radius: 5px;
    i {
        margin-right: 8px;
    }
`;

const ButtonBox = styled.div`
margin-top: 10px;
    display: flex;
    justify-content: center;
`;