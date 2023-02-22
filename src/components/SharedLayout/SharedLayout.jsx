import { Container, Header, NavBox, PageLink } from './SharedLayout.styled';

import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const SharedLayout = () => {
  const location = useLocation();
  let activHome = {};
  let activMovies = {};
  if (location.pathname === '/') {
    activHome = {
      fontWeight: 600,
      color: '#d71b1b',
      borderBottom: '1px solid #f31d1d',
    };
  } else {
    activMovies = {
      fontWeight: 600,
      color: '#d71b1b',
      borderBottom: '1px solid #f31d1d',
    };
  }
  return (
    <Container>
      <Header>
        <NavBox>
          <PageLink to="/" style={activHome}>
            Home
          </PageLink>
          <PageLink to="/movies" style={activMovies}>
            Movies
          </PageLink>
        </NavBox>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
