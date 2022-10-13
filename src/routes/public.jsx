import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function PublickRoute({ children }) {

  const {isLogin} = useSelector(state => state.userStatus);

  return <>{isLogin ? <Navigate to="/" /> : children}</>;
}