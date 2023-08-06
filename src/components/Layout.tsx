import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import ROUTES from '../constants/routes';

export default function Layout() {
  return (
    <Container>
      <nav>
        <Link to={ROUTES.HOME}>HOME</Link>
        <Link to={ROUTES.SIGNIN}>SIGNIN</Link>
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>
        <Link to={ROUTES.TODO}>TODO</Link>
      </nav>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  nav a {
    display: block;
  }
`;
