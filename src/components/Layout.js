import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { StyledLink, StyledHeader } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>
        <StyledHeader>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </StyledHeader>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};
export default Layout;
