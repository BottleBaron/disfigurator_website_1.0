/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { User } from "../redux/userSlice";

const UserSchema: z.ZodType<User> = z.object({
  username: z.string().min(1, { message: "Username cannot be empty" }),
  password: z.string().min(1, { message: "Message cannot be empty" }),
});

function LoginModal() {
  const [loginModalEnabled, setLoginModal] = useState(true);

  const handleLogin = () => {
    setLoginModal(false);
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
            }}
          >
            <form>

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
