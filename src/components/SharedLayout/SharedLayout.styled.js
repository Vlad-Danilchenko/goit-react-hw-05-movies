// import second from '../../Img/'
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 15px;
  margin: 0 auto;
  max-width: 1600px;
  min-height: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: #1e1e1e;

  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../../Img/mainBGI.jpg'); */
`;
export const Header = styled.header`
  height: 75px;
  border-bottom: 1px solid #313131;
  background-color: #1e1e1e;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  margin: -15px;
  margin-bottom: 1px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const NavBox = styled.nav`
  display: flex;
  justify-content: end;
`;

export const PageLink = styled(NavLink)`
  display: block;
  text-align: center;
  margin: 0 8px;
  padding: 25px 0;
  min-width: 100px;

  text-decoration: none;
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: -0.006em;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: #8e8e8e;
  &:hover,
  &:focus {
    font-weight: 600;
    color: #d71b1b;
    border-bottom: 1px solid #f31d1d;
  }
`;
