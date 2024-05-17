import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { deletePost, fetchPosts } from "../redux/postThunks";
import { useAppDispatch, useAppSelector } from "../redux/store";

interface PostIdDTO {
  id: string
}

const PostIdSchema: z.ZodType<PostIdDTO> = z.object({
  id: z.string().min(10, {message: "Id must be at least 10 characters"}),

});

function DeletePostForm() {
  const dispatch = useAppDispatch();
  const postState = useAppSelector((state) => state.post.posts);


  const [isLoaded, setPageIsLoaded] = useState(false);
  const fetchData = async () => {
      const action = await dispatch(fetchPosts());
      if (fetchPosts.fulfilled.match(action)) {
          console.log("Post data fetch Succeeded for delete form");
          setPageIsLoaded(true);
      } else console.error(action.payload);
  };
  
  if (!isLoaded) fetchData()

    const { register, handleSubmit, formState } = useForm<PostIdDTO>({
      defaultValues: {
        id: "",
      },
      resolver: zodResolver(PostIdSchema),
    });


  const formfont = {
    fontWeight: "bold",
    fontSize: 18,
  };

  function onSubmitDeletePost(postId: PostIdDTO) {
    if (postState.some((p) => p.id == postId.id)) {
      dispatch(deletePost(postId.id));
    }
  }

  return (
    <form
      className="flex flex-col items-center, justify-center"
      onSubmit={handleSubmit(onSubmitDeletePost)}
    >
      <Typography sx={formfont}>Delete Post</Typography>

      <fieldset className="flex flex-col justify-between">
        <label htmlFor="id">Id</label>
        <input
          className={`border-2 ${
            formState.errors.id ? "border-red-500" : "border-slate-200"
          } `}
          id="id"
          type="text"
          {...register("id")}
          style={{ display: "flex" }}
        />
        {formState.errors.id && <span className="text-red-500">{formState.errors.id.message}</span>}
      </fieldset>
      <Button type="submit">Delete Post</Button>
    </form>
  );
}

export default DeletePostForm;
