import {
  Grow,
  Grid,
  Container,
  Paper,
  AppBar,
  TextField,
  Button,
  Chip,
  Autocomplete,
} from "@mui/material";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Paginate from "../Pagination";
import { useNavigate, useLocation } from "react-router-dom";
import useStyles from "./styles";
// import ChipInput from "material-ui-chip-input";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState(["News"]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
    } else {
      navigate("/");
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Blogs"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Autocomplete
                multiple
                id="tags-standard"
                options={tags}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Favorites"
                  />
                )}
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Paginate />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
