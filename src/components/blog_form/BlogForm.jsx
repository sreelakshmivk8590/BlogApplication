import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent, Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(to right, #fceabb, #f8b500)' }}>
            <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', width: '50%', minWidth: '300px' }}>
                <CardContent>
                    <Typography variant='h3' sx={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Add Blog</Typography>
                    <Stack spacing={2}>
                        <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
                        <Input variant='outlined' type="text" id="blogName" name="blogName" fullWidth />

                        <InputLabel htmlFor="authorName">Author Name:</InputLabel>
                        <Input variant='outlined' type="text" id="authorName" name="authorName" fullWidth />

                        <InputLabel htmlFor="description">Description:</InputLabel>
                        <TextareaAutosize variant='outlined' id="description" name="description" minRows={5} fullWidth />

                        <Button
                            variant='contained'
                            onClick={() => { navigate('/home') }}
                            sx={{ marginTop: '20px', width: '100%' }}
                        >
                            Submit Blog
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default BlogForm;
