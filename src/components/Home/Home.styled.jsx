import styled from '@emotion/styled';

export const CardItem = styled.li`
  h3 {
    color: #5338ec;
    display: block;
    text-align: center;
    margin: 0px;
    /* margin: 7px, 0px, 7px, 0px; */

  }

  img {
    border: '1px solid';
    border-radius: 20px;
    height: 400px;
    margin-bottom: 7px;

    @media (max-width: 599px) {
      display: block;
      width: 260px;
      margin: 0 auto;
    }
    @media (min-width: 1180px) {
      width: 350px;
      height: 450px;
    }
  }

  span {
    color: #5338ec;
    display: block;
    text-align: center;
    margin-top: 7px;
  }
`;
