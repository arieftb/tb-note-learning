import { Link, Route, Routes } from 'react-router-dom';
import { NotesPage } from './presentation/pages/NotesPage';
import { DetailPage } from './presentation/pages/DetailPage';

function App () {
  return (
    <>
      <header className="app-header mb-4">
        <h1><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>TB Note</Link></h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NotesPage/>}/>
          <Route path="/notes/:id" element={<DetailPage/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
