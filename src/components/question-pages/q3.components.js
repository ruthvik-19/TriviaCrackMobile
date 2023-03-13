import { Card, CardContent, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class Q3 extends React.Component {
    constructor(props) {
        super(props)

        this.click1 = this.click1.bind(this)
        this.click2 = this.click2.bind(this)
        this.click3 = this.click3.bind(this)
        this.click4 = this.click4.bind(this)

        this.specialColorStyle = {
            color: 'white',
            backgroundColor: '#EAD33E',
            ':hover': {
                backgroundColor: '#D8C020'
            }
        }
        this.colorStyle = {
            color: '#D8C020',
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
                <Box align='center' bgcolor='#F4DE51' ref={this.contentRef} height='150vh' overflow={this.state.isOverflowing ? 'auto' : 'hidden'} paddingBottom='10%'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card elevation={0} style={{backgroundColor: 'inherit'}}>
                                <CardContent>
                                    <Typography variant="h4" color='white'>Which religious festival celebrates the birth of lord Krishna?</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <img src="triviacrack/IMG_6354.png" alt='hist' width='100px'></img>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click1} sx={this.state.buttons[0].styling}>Diwali</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click2} sx={this.state.buttons[1].styling}>Janmashtami</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click3} sx={this.state.buttons[2].styling}>Holi</Button>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Button variant='contained' size="large" onClick={this.click4} sx={this.state.buttons[3].styling}>Christmas</Button>
                        </Grid>

                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>

                        <Grid item xs={12}>
                            <Button component={Link} to='/q4' sx={this.colorStyle}>Next Question</Button>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}