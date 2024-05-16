import { Button, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { deletePost } from "../redux/postThunks";
import { useAppDispatch, useAppSelector } from "../redux/store";

function DeletePostForm() {
  const dispatch = useAppDispatch();
  const postState = useAppSelector((state) => state.post.posts);



  const [ isValid, setIsValid ] = useState(false);
  const [ textState, setTextState ] = useState("");

  const formfont = {
    fontWeight: "bold",
    fontSize: 18,
  };

  function onSubmitDeleteForm(event: FormEvent<HTMLFormElement>) {
    
    console.log("Form Submitted")
    event.preventDefault();


    if (postState.some((p) => p.id == textState)) {
      dispatch(deletePost(textState));
      setIsValid(true);
    } else setIsValid(false);
  }

  return (
    <form
      className="flex flex-col items-center, justify-center"
      onSubmit={onSubmitDeleteForm}
    >
      <Typography sx={formfont}>Delete Post</Typography>

      <fieldset className="flex flex-col justify-between">
        <label htmlFor="id">Id</label>
        <input
          className={`border-2 ${
            isValid ? "border-red-500" : "border-slate-200"
          } `}
          id="id"
          type="text"
          onChange={(e) => setTextState(e.target.value)}
          style={{ display: "flex" }}
        />
        {isValid && <span className="text-red-500">Id was not valid</span>}
      </fieldset>
      <Button type="submit">Delete Post</Button>
    </form>
  );
}

export default DeletePostForm;
