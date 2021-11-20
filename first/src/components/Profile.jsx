import { Box } from "@mui/system";
import { useCallback } from "react";
import { toggleNameCheckbox } from "../store/profile/actions";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(toggleNameCheckbox());
  }, [dispatch]);
  return (
    <Box>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />

      {showName && <div>{name}</div>}
    </Box>
  );
}
