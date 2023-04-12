import {useState} from 'react';
import {
    Card,
    CardContent,
    Typography,
    Container,
    IconButton,
    TextField,
    Box
} from '@mui/material';


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Task = ({
    title,
    description,
    id,
    deleteTask,
    editTask
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const delTask = () => {
        deleteTask(id)
    }
    const edTask = () => {
        if (isEditing) {
            editTask(id, newTitle, newDescription);
        }
        setIsEditing(!isEditing);
    }

    return (
        <>
            <Card variant='outlined'
                style={
                    {marginTop: 35}
            }>
                <CardContent> {
                    isEditing ? (

                        <Stack direction="row" justifyContent="center" alignItems="center"
                            spacing={2}
                            divider={
                                <Divider
                            orientation="vertical"
                            flexItem/>
                        }>
                            <Typography>
                                <TextField label="Title" variant="outlined"
                                    value={newTitle}
                                    onChange={
                                        (e) => setNewTitle(e.target.value)
                                    }/></Typography>
                            <Typography><TextField label="Description" variant="outlined"
                                    value={newDescription}
                                    onChange={
                                        (e) => setNewDescription(e.target.value)
                                    }/></Typography>
                            <Typography>
                                <IconButton onClick={edTask}>
                                    <SaveIcon style={
                                        {
                                            color: "black",
                                            float: "right"
                                        }
                                    }/>
                                </IconButton>
                            </Typography>
                        </Stack>

                    ) : (

                        <>
                            <Stack direction="row" justifyContent="center" alignItems="center"
                                spacing={2}
                                divider={
                                    <Divider
                                orientation="vertical"
                                flexItem/>
                            }>
                                <Typography>{title}</Typography>
                                <Typography>{description}</Typography>
                                <Typography>
                                    <IconButton style={
                                            {float: "right"}
                                        }
                                        onClick={edTask}>
                                        <EditIcon style={
                                            {color: "blue"}
                                        }/>
                                    </IconButton>
                                </Typography>
                                <Typography>
                                    <IconButton style={
                                            {float: "right"}
                                        }
                                        onClick={delTask}>
                                        <DeleteIcon style={
                                            {color: "blue"}
                                        }/>
                                    </IconButton>
                                </Typography>
                            </Stack>

                        </>

                    )
                } </CardContent>
            </Card>
        </>

    );
};
export default Task;
