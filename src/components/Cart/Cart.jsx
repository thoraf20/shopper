import {Typography, Container, Button, Grid } from "@material-ui/core";



function Cart() {

    const EmptyCart = () => (
        <Typography variant="subtitles">You have no items in your shopping cart, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>

            </Grid>
        </>
    ) 

    return (
        <Container>
            <div className={} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCard /> : <FilledCart />}
        </Container>
    )
}

export default Cart
