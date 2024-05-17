/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { User, fetchUsers } from "../redux/userSlice";

const UserSchema: z.ZodType<User> = z.object({
  id: z.string().optional(),
  username: z.string().min(1, { message: "Username cannot be empty" }),
  password: z.string().min(1, { message: "Message cannot be empty" }),
});

function LoginModal() {
  const userState = useAppSelector((u) => u.user.users);
  const dispatch = useAppDispatch();
  const [loginModalEnabled, setLoginModal] = useState(true);

  const [isLoaded, setPageIsLoaded] = useState(false);
  const fetchData = async () => {
      const action = await dispatch(fetchUsers());
      if (fetchUsers.fulfilled.match(action)) {
          console.log("User fetch Succeeded for login form");
          setPageIsLoaded(true);
      } else console.error(action.payload);
  };
  if (!isLoaded) fetchData()

  const handleLogin = (user: User) => {
    if (
      userState.some(
        (u) => u.username == user.username && u.password == user.password
      )
    )
      setLoginModal(false);
    else {
      // set bladibla
    }
  };

  const { register, handleSubmit, formState } = useForm<User>({
    defaultValues: {
      username: "",
      password: "",
    },

    resolver: zodResolver(UserSchema),
  });

  return (
    <Box>
      <Modal
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          height: "20rem",
          width: "20rem",
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: "#383838",
          boxShadow: 24,
          p: 4,
        }}
        open={loginModalEnabled}
        closeAfterTransition
      >
        <Fade in={loginModalEnabled}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <form
              className="flex flex-col items-center, justify-center"
              onSubmit={handleSubmit(handleLogin)}
            >
              <fieldset className="flex flex-col justify-between">
                <label htmlFor="username">Username</label>
                <input
                  className={`border-2 ${
                    formState.errors.id ? "border-red-500" : "border-slate-200"
                  } `}
                  id="username"
                  type="text"
                  style={{ display: "flex" }}
                  {...register("username")}
                />
                {formState.errors.id && (
                  <span className="text-red-500">
                    {formState.errors.id.message}
                  </span>
                )}
              </fieldset>

              <fieldset className="flex flex-col justify-between">
                <label htmlFor="title">Password</label>
                <input
                  className={`border-2 ${
                    formState.errors.password
                      ? "border-red-500"
                      : "border-slate-200"
                  } `}
                  id="password"
                  type="password"
                  style={{ display: "flex" }}
                  {...register("password")}
                />
                {formState.errors.id && (
                  <span className="text-red-500">
                    {formState.errors.id.message}
                  </span>
                )}
              </fieldset>
              <Button
                sx={{ height: 50, width: "100%", bgcolor: "ButtonFace" }}
                type="submit"
              >
                Login
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
      {loginModalEnabled && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
      )}
    </Box>
  );
}

export default LoginModal;
