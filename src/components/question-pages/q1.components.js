import { Card, CardContent, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class Q1 extends React.Component {
    constructor(props) {
        super(props)

        this.click1 = this.click1.bind(this)
        this.click2 = this.click2.bind(this)
        this.click3 = this.click3.bind(this)
        this.click4 = this.click4.bind(this)


        this.specialColorStyle = {
            color: 'white',
            backgroundColor: '#109448',
            ':hover': {
                backgroundColor: '#097F3A'
            }
        }
        this.colorStyle = {
            color: '#097F3A',
            backgroundColor: 'white',
            ':hover': {
                backgroundColor: '#CDCDCD'
            }
        }

        this.state = {
            buttons: [
                {styling: this.colorStyle},
                {styling: this.colorStyle},
                {styling: this.colorStyle},
                {styling: this.colorStyle}
            ],
            isOverflowing: false
        }
        this.contentRef = React.createRef()
    }

    componentDidMount() {
        const contentHeight = this.contentRef.current.clientHeight;
        const windowHeight = window.innerHeight;

        if (contentHeight > windowHeight) {
            this.setState({ isOverflowing: true });
        }
    }

    click1() {
        this.setState({buttons: [
            {styling: this.specialColorStyle},
            {styling: this.colorStyle},
            {styling: this.colorStyle},
            {styling: this.colorStyle}
        ]})
    }
    click2() {
        this.setState({buttons: [
            {styling: this.colorStyle},
            {styling: this.specialColorStyle},
            {styling: this.colorStyle},
            {styling: this.colorStyle}
        ]})
    }
    click3() {
        this.setState({buttons: [
            {styling: this.colorStyle},
            {styling: this.colorStyle},
            {styling: this.specialColorStyle},
            {styling: this.colorStyle}
        ]})
    }
    click4() {
        this.setState({buttons: [
            {styling: this.colorStyle},
            {styling: this.colorStyle},
            {styling: this.colorStyle},
            {styling: this.specialColorStyle}
        ]})
    }

    render() {
        return (
            <>
                <Box align='center' bgcolor='#19BA5D' ref={this.contentRef} height='150vh' overflow={this.state.isOverflowing ? 'auto' : 'hidden'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card elevation={0} style={{backgroundColor: 'inherit'}}>
                                <CardContent>
                                    <Typography variant="h4" color='white'>What is the force that pushes up on wings, allowing flight?</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <img src="triviacrack/B4liT2DCYAA79fM.png" alt='science' width='100px'></img>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click1} sx={this.state.buttons[0].styling}>Lift</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click2} sx={this.state.buttons[1].styling}>Drag</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click3} sx={this.state.buttons[2].styling}>Turbulence</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click4} sx={this.state.buttons[3].styling}>Autopilot</Button>
                        </Grid>

                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>

                        <Grid item xs={12}>
                            <Button component={Link} to='/q2' sx={this.colorStyle}>Next Question</Button>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}