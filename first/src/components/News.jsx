import {
  Button,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useCallback, useEffect } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HealingIcon from "@mui/icons-material/Healing";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNewsError,
  selectNewsList,
  selectNewsLoading,
} from "../store/news/selectors";
import { getNews } from "../store/news/actions";
import Links from "./Links";
import { Box } from "@mui/system";

export const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNewsList);
  const isLoading = useSelector(selectNewsLoading);
  const error = useSelector(selectNewsError);

  const requestNews = useCallback(async () => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    requestNews();
  }, [requestNews]);

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: "#426696",
          fontSize: "3rem",
          opacity: "0.8",
          fontWeight: "600",
          margin: "1rem 1rem 1rem 2rem",
        }}
      >
        Health News
      </Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {!!error && <Typography variant="h4">Error: {error}</Typography>}

          <List>
            {news.map((n) => (
              <ListItem key={n.published_at}>
                <ListItemButton>
                  <ListItemIcon>
                    <HealingIcon />
                  </ListItemIcon>
                  <ListItemText>{n.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            sx={{ textAlign: "center", marginTop: "2rem", marginLeft: "2rem" }}
            onClick={requestNews}
          >
            Refresh news
          </Button>
          <Box style={{ marginTop: "1rem" }}>
            <Links />
          </Box>
        </>
      )}
    </>
  );
};
