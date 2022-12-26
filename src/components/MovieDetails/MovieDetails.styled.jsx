import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
`;
export const BoxCard = styled(Box)`
  display: flex;

  @media (max-width: 599px) {
    flex-direction: column;
  }
  @media (max-width: 899px) {
    flex-direction: column;
  }

  img {
    display: block;
    border: '1px solid';
    border-radius: 20px;
    height: 400px;
    margin-bottom: 7px;

    &:hover {
      scale: 1.05;
      outline: solid 2px blue;
    }

    @media (max-width: 599px) {
      display: block;
      width: 260px;
      margin: 0 auto;
    }
    @media (min-width: 600px) {
      width: 360px;
      margin-right: 25px;
    }
    @media (max-width: 899px) {
      display: block;
      width: 360px;
      margin-right: 25px;
      margin: auto;
      margin-bottom: 25px;
    }
    @media (min-width: 1180px) {
      width: 450px;
      height: 450px;
      margin-right: 40px;
    }
  }

  div {
    width: 100%;
    border-radius: 20px;
    box-shadow: blue 0px 0px 10px;
    padding: 20px;
    text-align: center;
    @media (max-width: 599px) {
      margin: 18px auto;
    }
  }

  h3 {
    margin-bottom: 7px;
  }

  p {
    text-align: start;
  }
`;
