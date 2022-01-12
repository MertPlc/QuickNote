import { useState } from 'react';
import './App.css';
import Enterance from './Enterance';
import NoteBook from './NoteBook';
import AppContext from './AppContext';

function App() {
  const [noteBook, setNoteBook] = useState(null);

  return (
    <AppContext.Provider value={noteBook, setNoteBook}>
    <div className="App">
      {noteBook ? <NoteBook /> : <Enterance />}
    </div>
    </AppContext.Provider>
  );
}

export default App;
