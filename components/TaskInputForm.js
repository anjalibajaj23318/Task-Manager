import {useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {SearchOutlined} from '@mui/icons-material';
import {IconButton} from '@mui/material';


const TaskInputForm = ({onSubmit, searchTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [searchBar, setSearchBar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            setTitleError(!title);
            setDescriptionError(!description);
            return;
        }
        onSubmit(title, description);
        setTitle('');
        setDescription('');
        setTitleError(false);
        setDescriptionError(false);


    };
    const handleSearch = (e) => {
        e.preventDefault();
        searchTask(searchBar);
        setSearchBar("");


    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box component="form"
                sx={
                    {
                        "& > :not(style)": {
                            m: 1,
                            width: "25ch"
                        }
                    }
                }
                noValidate
                autoComplete="off"


                onSubmit={handleSearch}>
                <TextField id="standard-bare" label="Search" variant="filled"
                    value={searchBar}
                    onChange={
                        (e) => setSearchBar(e.target.value)
                    }
                    InputProps={
                        {
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlined/>
                                </IconButton>
                            )
                        }
                    }/>
            </Box>

            <Typography variant="h5" align="center" marginTop="20px" marginBottom="20px">
                Task Manager
            </Typography>
            <Box component="form"
                sx={
                    {
                        "& > :not(style)": {
                            m: 1,
                            width: "25ch"
                        }
                    }
                }
                noValidate
                autoComplete="off">

                <TextField label="Title" variant="filled"
                    value={title}
                    required
                    error={titleError}
                    helperText={
                        titleError ? "This Field is required" : ""
                    }
                    onChange={
                        (e) => setTitle(e.target.value)
                    }/>

                <TextField required label="Description" variant="filled"
                    value={description}
                    helperText={
                        descriptionError ? "This Field is required" : ""
                    }
                    error={descriptionError}
                    onChange=
                    { (e) => setDescription(e.target.value) }/>

                <Button variant="contained"
                    onClick={handleSubmit}
                    type='submit'>
                    Add</Button>
            </Box>
        </Box>
    );
};;
export default TaskInputForm;
