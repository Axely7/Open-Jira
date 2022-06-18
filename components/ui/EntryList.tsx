import { List, Paper } from '@mui/material';
import { DragEvent, FC, useContext, useMemo } from 'react';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus
}


export const EntryList:FC <Props> = ({ status }) => {

  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ] );

  const allowDrop = ( event:  DragEvent<HTMLDivElement> ) => {
    event.preventDefault();
  }

  const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
    const id = event.dataTransfer.getData('text');
    console.log({id});
  }
  


  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
    >
        <Paper sx={{ height: 'calc(100vh - 200px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px' }}>
            <List sx={{ opacity: 1 }}>
                {
                  entriesByStatus.map( entry => (
                    <EntryCard key={ entry._id } entry={ entry }/>
                  ))
                }
            </List>
        </Paper>
    </div>
  )
}
