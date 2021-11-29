import {
  Button,
  CircularProgress,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { API } from "../utils";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HealingIcon from "@mui/icons-material/Healing";

export const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${API.url}?access_key=${API.access_key}& categories = ${API.categories}& languages = ${API.languages}`
      );

      if (!response.ok) {
        throw new Error("Something wrong");
      }
      const result = await response.json();

      setError(false);
      setNews(result.data);
    } catch (err) {
      setError(true);
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestNews();
  }, []);

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

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Button onClick={requestNews}>Refresh news</Button>
          {error && (
            <Typography variant="h4">Error. The page not found</Typography>
          )}

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
        </>
      )}
    </>
  );
};
