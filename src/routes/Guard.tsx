// import { useLocation, Navigate } from 'react-router-dom';
// import { useAppSelector } from '../store/hooks';
import { Role } from '../types/User';

const Guard = ({ element, role }: { element: JSX.Element; role: Role }) => {
  //   const location = useLocation();
  //   const { user } = useAppSelector((state) => state.authReducer);

  //   if (user.role !== role) {
  //     return <Navigate to="/sign" state={{ from: location }} />;
  //   }
  return element;
};

export default Guard;
