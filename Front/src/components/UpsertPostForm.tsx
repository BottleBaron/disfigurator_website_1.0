import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Post } from "../redux/postSlice";
import { addPost, updatePost } from "../redux/postThunks";
import { useAppDispatch, useAppSelector } from "../redux/store";

const PostSchema: z.ZodType<Post> = z.object({
  id: z.string(),
  imageUrl: z.string().url({message: "Must be a valid URL"}),
  title: z.string().min(1, { message: "Title cannot be empty" }),
  content: z.string().min(1, { message: "Content cannot be empty" }),
});

function UpsertPostForm() {
  const dispatch = useAppDispatch();
  const postState = useAppSelector((state) => state.post.posts);

  const defaultId = Date.now().toString();

  const defaultValuePost: Post = {
    id: "",
    title: "",
    content: "",
    imageUrl: "",
  };

  const { register, handleSubmit, formState } = useForm<Post>({
    defaultValues: {
      id: defaultId,
      title: defaultValuePost.title,
      content: defaultValuePost.content,
      imageUrl: defaultValuePost.imageUrl,
    },

    resolver: zodResolver(PostSchema),
  });

  const onSubmitPostForm = (post: Post) => {
    console.log("UPSERTPOSTFORM SUBMITTED")
    if (postState.some((p) => p.id == post.id)) {
      dispatch(updatePost(post));
    } else {
      dispatch(addPost(post));
    }
  };

  const formfont = {
    fontWeight: "bold",
    fontSize: 18,
  };

  return (
    <form
      className="flex flex-col items-center, justify-center"
      onSubmit={handleSubmit(onSubmitPostForm)}
    >
      <Typography sx={formfont}>Create Or Update Post</Typography>

      <fieldset className="flex flex-col justify-between">
        <label htmlFor="id">Id</label>
        <input
          className={`border-2 ${
            formState.errors.id ? "border-red-500" : "border-slate-200"
          } `}
          id="_id"
          type="text"
          style={{ display: "flex" }}
          {...register("id")}
        />
        {formState.errors.id && (
          <span className="text-red-500">{formState.errors.id.message}</span>
        )}
      </fieldset>

      <fieldset className="flex flex-col justify-between">
        <label htmlFor="title">Title</label>
        <input
          className={`border-2 ${
            formState.errors.title ? "border-red-500" : "border-slate-200"
          } `}
          id="title"
          type="title"
          style={{ display: "flex" }}
          {...register("title")}
        />
        {formState.errors.title && (
          <span className="text-red-500">{formState.errors.title.message}</span>
        )}
      </fieldset>

      <fieldset className="flex flex-col justify-between">
        <label htmlFor="content">Content</label>
        <input
          className={`border-2 ${
            formState.errors.content ? "border-red-500" : "border-slate-200"
          } `}
          id="content"
          type="text"
          style={{ display: "flex" }}
          {...register("content")}
        />
        {formState.errors.title && (
          <span className="text-red-500">{formState.errors.content?.message}</span>
        )}
      </fieldset>

      <fieldset className="flex flex-col justify-between">
        <label htmlFor="imageUrls">Image Link</label>
        <input
          className={`border-2 ${
            formState.errors.title ? "border-red-500" : "border-slate-200"
          }`}
          id="imageUrls"
          type="url"
          style={{ display: "flex" }}
          {...register("imageUrl")}
        />
        {formState.errors.imageUrl && (
          <span className="text-red-500">
            {formState.errors.imageUrl.message}
          </span>
        )}
      </fieldset>
      <Button type="submit">Upsert Post</Button>
    </form>
  );
}

export default UpsertPostForm
