import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import {DragEvent, FC} from 'react'
import { Entry } from '../../interfaces';

interface Props {
    entry: Entry;
}


export const EntryCard:FC<Props>= ({ entry }) => {

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id)
        // todo: modificar estado
    }

    const onDragEnd = () => {
          
    }


  return (
    <Card
        sx={{ marginBottom: 1 }}
        draggable={ true }
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>Hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>

    </Card>
  )
};
