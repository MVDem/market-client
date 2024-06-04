import { Outlet } from 'react-router-dom';

function FarmerLayout() {
  return (
    <div>
      <h1>FarmerLayout</h1>
      <Outlet />
    </div>
  );
}
export default FarmerLayout;
