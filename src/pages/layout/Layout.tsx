import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname === '/' && <SearchBar />}
      <Outlet />
    </>
  );
}
