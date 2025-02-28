import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const user = useSelector(state => state.client.user);

    if (!user || !user.token) {
        // Kullanıcı giriş yapmamışsa, login sayfasına yönlendir ve geldiği sayfayı state'e kaydet
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Kullanıcı giriş yapmışsa içeriği göster
    return children;
};

export default ProtectedRoute; 