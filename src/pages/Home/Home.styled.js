import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const MainTitle = styled.h1`
  padding: 20px;
  text-align: center;
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.3%;
  /* or 83px */
  color: #ffffff;
`;

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 54px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  background: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
    /* cursor: zoom-in; */
  }
`;
export const MovieImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #f7f7f7;

  &:hover,
  &:focus {
    transform: scale(1.03);
    /* curso r: zoom-in; */
    font-weight: 600;
    color: #d71b1b;
  }
`;

export const MovieTitle = styled.p`
  /* display: block; */
  text-align: center;
  text-decoration: none;

  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: -0.011em;

  color: inherit;
`;
