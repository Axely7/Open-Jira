import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer  } from './';


export interface EntriesState {
    entries: Entry[];
}

interface Props {
    children: any;
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Please do me a favor like that',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progeso: Please do me a favor like that so do re',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Please do me a favor like that love is the answer there are many songs about that',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ],
}
export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    

    return(
        <EntriesContext.Provider value={{
            ...state,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};