import { AppBar, Typography } from "@mui/material";
import logo from "../../assets/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={logo} alt="Logo" height="60" />
    </AppBar>
  );
};

export default Navbar;
