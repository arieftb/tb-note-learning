import { Route, Routes, useLocation } from 'react-router-dom';
import { NotesPage } from './presentation/pages/NotesPage';
import { DetailPage } from './presentation/pages/DetailPage';
import { NewNotePage } from './presentation/pages/NewNotePage';
import { ArchivedNotesPage } from './presentation/pages/ArchivedNotesPage';
import { NotFoundPage } from './presentation/pages/NotFoundPage';
import { RegisterPage } from './presentation/pages/RegisterPage';
import { LoginPage } from './presentation/pages/LoginPage';
import { Header } from './presentation/organisms/Header';

function App () {
  const location = useLocation();

  return (
    <>
      <Header currentPath={location.pathname}/>
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
