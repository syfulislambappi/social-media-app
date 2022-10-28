import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import logo from "./assets/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={logo} alt="Logo" height="60" />
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </AppBar>
    </Container>
  );
}

export default App;