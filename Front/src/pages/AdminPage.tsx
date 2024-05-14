import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { display } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store";


function AdminPage() {

    const dispatch = useAppDispatch();

    const [loginModalEnabled, setLoginModal] = useState(true);
    const [pageInitiated, setPageInitiated] = useState(false);

    var pageAccesString: string = "flex";
    
    const initatePage = () => {

        setPageInitiated(true);
    }

    useEffect(() => {
        if(pageInitiated) pageAccesString = "none"
        else pageAccesString = "flex"
    }, [pageInitiated])


// TODO: ADD FORMS HERE
    return (
        <Box sx={{display: "flex", flex: 1, alignItems: "center", flexDirection: "column"}}>
            <Modal open={loginModalEnabled}
                onClose={initatePage}
                closeAfterTransition
            >
                <Fade in={loginModalEnabled}>
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                    </Box>
                </Fade>
            </Modal>
            {loginModalEnabled && <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />}
        
            <Box>

            </Box>
        </Box>
    );
}