import { Button, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function LoginModal() {
  const [loginModalEnabled, setLoginModal] = useState(true);

  const handleLogin = () => {
    setLoginModal(false);
  };

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
            <Button
              sx={{ height: 50, width: "100%", bgcolor: "ButtonFace" }}
              onClick={handleLogin}
            >
              Login
            </Button>
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
