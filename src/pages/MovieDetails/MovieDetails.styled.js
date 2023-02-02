import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const MainContainer = styled.main`
  padding: 20px;
  margin: 0 -15px;
`;

export const Container = styled.div`
  margin: 20px auto;
  padding: 15px;
  max-width: 800px;
  background-color: #1f1f1fa8;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieBox = styled.div`
  display: flex;
`;
export const DescriptionBox = styled.div`
  margin-left: 15px;
`;

export const MovieTitle = styled.h1`
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.2;
  margin: 0;
  padding: 0;

  letter-spacing: -0.03em;

  color: #ffffff;
`;

export const MovieSubtitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;

  letter-spacing: -0.02em;

  color: #ffffff;
`;
export const MovieText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.011em;

  color: #ffffff;

  opacity: 0.56;
`;

export const MovieList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin: -8px;
  margin-bottom: 8px;
`;

export const MovieItem = styled.li`
  margin: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.011em;

  color: #ffffff;

  opacity: 0.56;
`;

export const ButtonMore = styled(NavLink)`
  padding: 8px 16px;
  margin-right: 8px;
  margin-top: 20px;

  min-width: 48px;
  min-height: 24px;

  border: 1px solid #f4f4f4;
  border-radius: 32px;

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.011em;
  text-decoration: none;

  color: #f4f4f4;
  &:hover,
  &:focus {
    border: 1px solid #e22b2b;
    color: #e22b2b;
  }
`;
