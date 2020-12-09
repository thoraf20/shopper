import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import logo from "../../assets/shopcart.png";
import useStyles from "./styles"

const Navbar = ({totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="Shopper" height="25px" className={classes.image} />
                        Shopper
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton arial-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;

