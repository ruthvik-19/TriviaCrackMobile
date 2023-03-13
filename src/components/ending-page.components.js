import { Card, CardContent, CardMedia, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class EndingPage extends React.Component {
    constructor(props) {
        super(props)

        this.colorStyle = {
            color: '#000000',
            backgroundColor: 'white',
            ':hover': {
                backgroundColor: '#CDCDCD'
            }
        }

    }

    render() {
        return (
            <>
                <Box align='center'>
                    <Grid item xs={12}>
                        <Card elevation={0}>
                            <CardMedia component='img' src='jhalak.png' alt='thanks' sx={{ maxWidth: 350, objectFit: 'contain' }} />
                            <CardContent>
                                <Typography variant="h2">Thank you!</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Button href='https://linktr.ee/raftaarutd' target="_blank" variant="contained" size='large' elevation={0} sx={this.colorStyle} >LinkTree</Button>
                    </Grid>
                </Box>
            </>
        )
    }
}