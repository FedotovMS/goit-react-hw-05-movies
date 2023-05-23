import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const Layout = () => {
  return (
    <div>
      <header>
        <ul className="mainNav">
          <li className="mainNav-item">
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li className="mainNav-item">
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default Layout;
