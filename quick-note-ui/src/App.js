import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import Enterance from './Enterance';
import NoteBook from './NoteBook';
import AppContext from './AppContext';
import { Button } from 'bootstrap';

function App() {
  const [noteBook, setNoteBook] = useState(null);

  return (
    <AppContext.Provider value={{noteBook, setNoteBook}}>
      <div className="App w-100 h-100">
        {noteBook ? <NoteBook /> : <Enterance />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
