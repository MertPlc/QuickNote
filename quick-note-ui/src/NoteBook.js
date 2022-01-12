import { useContext } from 'react';
import AppContext from './AppContext';

function NoteBook() {
    const ctx = useContext(AppContext);

    return (
        <div>
            Notes of '{ctx.NoteBook.name}' will be here..
        </div>
    )
}

export default NoteBook
