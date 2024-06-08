import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Layout() {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
    </>
  );
}
