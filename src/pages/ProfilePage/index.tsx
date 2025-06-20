import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';

export const ProfilePage: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = !!user.accessToken;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <main style={{ paddingTop: '100px', padding: '20px', color: 'black' }}>
      <h1>Личный кабинет</h1>
      <p>Email: {user.email}</p>
      <p>Имя: {user.firstName}</p>
      <p>Фамилия: {user.lastName}</p>
      <p>Город: {user.city}</p>
      {/* Здесь можно добавить кнопку выхода и другую информацию */}
    </main>
  );
};
