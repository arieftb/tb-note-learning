import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NotesPage } from './presentation/pages/NotesPage';
import { DetailPage } from './presentation/pages/DetailPage';
import { NewNotePage } from './presentation/pages/NewNotePage';
import { ArchivedNotesPage } from './presentation/pages/ArchivedNotesPage';
import { NotFoundPage } from './presentation/pages/NotFoundPage';
import { RegisterPage } from './presentation/pages/RegisterPage';
import { LoginPage } from './presentation/pages/LoginPage';
import { Header } from './presentation/organisms/Header';
import { LogoutUseCase } from './domain/auth/usecases/LogoutUseCase.js';
import authRepositoryInstance from './domain/auth/repositories/AuthRepositoryInstance.js';

const logoutUseCase = new LogoutUseCase(authRepositoryInstance);

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUseCase.execute();
      navigate('/login', { replace: true });
    } catch (error) {
      console.log('logout failed', error);
    }
  };

  return (
    <>
      <Header currentPath={location.pathname} onLogoutClick={
        handleLogout
      }/>
      <main>
        <Routes>
          <Route path="/" element={<NotesPage/>}/>
          <Route path="/notes/new" element={<NewNotePage/>}/>
          <Route path="/notes/:id" element={<DetailPage/>}/>
          <Route path="/archived" element={<ArchivedNotesPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
