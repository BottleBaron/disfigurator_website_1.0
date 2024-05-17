/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import DeletePostForm from "../components/DeletePostForm";
import LoginModal from "../components/LoginModal";
import UpsertPostForm from "../components/UpsertPostForm";
import { useAppDispatch, useAppSelector } from "../redux/store";


function AdminPage() {
  const dispatch = useAppDispatch();
  const postState = useAppSelector((state) => state.post.posts);


  const formfont = {
    fontWeight: "bold",
    fontSize: 18,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    > 
        <LoginModal />
        <UpsertPostForm />
        <hr style={{ width: "100%" }} />
        <DeletePostForm />
        <hr style={{ width: "100%" }} />
    </Box>
  );
}

export default AdminPage;
