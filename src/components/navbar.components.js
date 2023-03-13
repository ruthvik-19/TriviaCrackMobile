import { AppBar, Button, Toolbar } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position='static' color='transparent' elevation={0}>
                <Toolbar variant='dense'>
                    <Button component={Link} to='/' disableRipple={true} disableFocusRipple={true} sx={{color: 'black', ':hover': {backgroundColor: '#FFFFFF'}}}>Trivia Crack</Button>
                </Toolbar>
            </AppBar>
        )
    }
}