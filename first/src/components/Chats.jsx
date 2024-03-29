import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setCurrentChat } from "../store/chats/actions";
import ChatList from "./ChatList";
import Form from "./Form";
import MessageList from "./MessageList";

export default function Chats() {
  const { chatId } = useParams();

  const dispatch = useDispatch();

  const setChat = useCallback(
    (id) => {
      dispatch(setCurrentChat(id));
    },
    [dispatch]
  );

  useEffect(() => {
    setChat(chatId);
  }, [chatId, setChat]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <ChatList />
      </Grid>

      <Grid
        item
        xs={8}
        sx={{
          borderLeft: 2,
          borderColor: "#6cdbeb",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <MessageList />

          <Form />
        </Box>
      </Grid>
    </Grid>
  );
}
