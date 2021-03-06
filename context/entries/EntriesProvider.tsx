import { FC, useEffect, useReducer } from 'react';
import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer  } from './';
import { useSnackbar } from 'notistack';


export interface EntriesState {
    entries: Entry[];
}

interface Props {
    children: any;
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async ( description: string ) => {

        const { data } = await entriesApi.post<Entry>('/entries', { description });

        dispatch({ type: '[Entry] Add-Entry', payload: data })
    }

    const updateEntry = async ( {_id, description, status}: Entry ) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
            dispatch({ type: '[Entry] ENTRY-UPDATED', payload: data });
            enqueueSnackbar('Entrada Actualizada', {
                variant: 'success',
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: '[Entry] Refresh-Data', payload: data })
    }

    const deleteEntry = async (entryx: Entry) => {
        try {
            const { data } = await entriesApi.delete<Entry>(`/entries/${entryx._id}`);
            dispatch({ type: '[Entry] ENTRY-DELETED', payload: data })
            enqueueSnackbar('Entrada Borrada', {
                variant: 'error',
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        refreshEntries();
    }, [])
    

    return(
        <EntriesContext.Provider value={{
            ...state,

            // Methods:
            addNewEntry,
            updateEntry,
            deleteEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
};