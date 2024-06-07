import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Layout() {
  return (
    <>
      <Header />
      <SearchBar />
      <Outlet />
    </>
  );
}
