import { Card, CardContent, CardMedia, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Box>
                    <Grid container spacing={2} align='center'>
                        <Grid item xs={12}>
                            <Card elevation={0}>
                                <CardMedia component='img' src="RaftaarTriviaCrackLogo.png" alt='logo' sx={{ maxWidth: 350, objectFit: 'contain' }} />
                                <CardContent>
                                    <Typography variant="h1">RAFTAAR</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Button component={Link} to='/q1' sx={{color: 'black', ':hover': {backgroundColor: '#CDCDCD'}}}>Get Started</Button>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}