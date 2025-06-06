import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeniedPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <img
        style={{ width: "100px" }}
        src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M92.8 25.3c1.5-1.5 3.2-3.4 2.2-9.2C93.4 7 78.8-1.5 66.4 5.7c-7.7 4.4-9 8-10 10.8-.7 1.7-1.2 3-3 4-2 1.2-4.2.2-6.5-.9-3-1.4-6.4-3-10.6-.4-5 3-4 7.2-3.4 10.3.3 1.6.6 2.9 0 3.6l-.8.6-7.6 1.8a9.9 9.9 0 0 0-3.3 2.2c-4.2 4-4.6 9.6.9 13.4 3 2 6.3 1.5 9.2 1 2.7-.5 5-.9 6.4.6 1.5 1.5 1.2 2.6.8 3.9-.4 1.5-.9 3.2 1 6.4 2 3.4 5 3.2 7.6 3 1.8-.2 3.5-.3 4.8.7 2.2 1.6 3.3 4 3.3 7.3h8.6c0-1.9 1.2-4.3 3.7-7.3 1.8-2.2 4-2.5 6.4-2.8 2.6-.4 5.5-.8 8.2-3.7 3.2-3.3 2.6-6.5 2.1-9-.2-1.5-.5-2.8.5-3.5.8-.6 2-.7 3.5-.7 3.1-.2 7-.5 9.2-5.7 2-4.8-1-7.4-3.4-9.5-1.4-1.2-2.7-2.3-2.7-3.6 0-1.3.7-2 1.5-2.9Zm-7.2-5a3 3 0 0 0 1-4.2l-.5-.7.5-.7a3 3 0 0 0-3.2-4.6l-.8.2-.6-.7a3 3 0 0 0-5.3 1.6v.9l-.9.3a3 3 0 0 0 0 5.6l.7.3v.8a3 3 0 0 0 5.3 1.9l.6-.7.8.2a3 3 0 0 0 2.4-.3ZM42 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM14 72a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z' fill='%23E8E8E8'/%3E%3Cpath d='m106.2 71.1 4 .8a1 1 0 0 1-.5 2l-3.9-.8-.8 3.9a1 1 0 0 1-2-.4l.8-3.9-3.9-.8a1 1 0 1 1 .4-2l4 .8.7-3.9a1 1 0 0 1 2 .4l-.8 4Z' fill='%23E8E8E8'/%3E%3Cpath d='M16.3 23a2 2 0 0 0-2.4 3.2l27 20.4a2 2 0 0 0 2.4-3.2l-27-20.3Zm20 54.8c0-1.6 1.4-3 3.5-3h40.8c2.1 0 3.6 1.4 3.5 3l-1.7 32.3a3.6 3.6 0 0 1-3.5 3.2H41.6a3.5 3.5 0 0 1-3.5-3.2l-1.8-32.3Z' fill='%23fff'/%3E%3Cpath d='M84.5 18.5c.5-.3.6-.9.3-1.3l-1-1.9 1-1.7a1 1 0 0 0-1-1.6l-2 .6-1.4-1.7a1 1 0 0 0-1.7.5l-.2 2.2-2 .7a1 1 0 0 0 0 1.9l2 .8v2a1 1 0 0 0 1.8.7l1.4-1.6 2 .5c.3.1.6 0 .8 0Z' fill='%23BDBDBD'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M44 42.7a3 3 0 1 1-3.7 4.8L13.2 27a3 3 0 1 1 3.6-4.8L44 42.7Zm-2.4 3.2a1 1 0 1 0 1.2-1.6L15.6 23.8a1 1 0 0 0-1.2 1.6L41.6 46Z' fill='%23BDBDBD'/%3E%3Cpath d='M53.8 47.5 50 46.3a1 1 0 1 0-.6 2l3.8 1a1 1 0 1 0 .6-1.8Zm-4.2-5.6 4-.2a1 1 0 0 1 0 2l-4 .2a1 1 0 0 1 0-2Zm-1.8 7.8a1 1 0 0 0-1.4 1.5l3 2.8a1 1 0 1 0 1.3-1.5l-2.9-2.8ZM43 51.1a1 1 0 0 1 1.3.7l1.3 3.7a1 1 0 0 1-1.9.7l-1.3-3.8a1 1 0 0 1 .6-1.3Zm18.3-20.7-2-.4.5-2a1 1 0 0 0-2-.3l-.4 2-2-.4a1 1 0 0 0-.3 2l2 .3-.5 2a1 1 0 1 0 2 .4l.4-2 2 .4a1 1 0 0 0 .3-2Zm10 12.4c1.6-2 3.6-2.5 6-1.4 3.4 1.5 3.8 5.5.9 7.1-.6.4-.8.5-2 .9-1.2.5-1.6.8-2.2 1.9a1 1 0 1 1-1.8-1 5.4 5.4 0 0 1 3.3-2.8l1.7-.7c1.4-.8 1.3-2.7-.7-3.6-1.6-.7-2.6-.4-3.6.8a1 1 0 1 1-1.6-1.2Zm1.2 10.4a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5Zm-3.3 48.2a6.7 6.7 0 0 1-4.1 5.4c-1.3.6-3 .9-4.4.8a14 14 0 0 1-6-1.6 15 15 0 0 1-2.3-1.7 74 74 0 0 1 .4-1.1l.5-.7c.1-.2.3-.3.5 0h.2l.1.1c2 1.6 4.3 2.5 6.6 2.6 3.3 0 5.6-1.5 6-3.8.5-2.5-1.4-4.6-5.2-5.8-1.2-.4-4.2-1.6-4.8-2-2.5-1.5-3.8-3.5-3.6-6 .3-3.4 3.4-6 7.4-6a13.4 13.4 0 0 1 7.4 2.2c.2.2.3.4.1.6l-.4.7-.4.6c-.1.2-.3.2-.5 0a11 11 0 0 0-6.1-1.8c-2.8 0-4.9 1.7-5 4 0 2 1.5 3.5 4.8 4.7 6.7 2.2 9.3 4.7 8.8 8.8Z' fill='%23BDBDBD'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M40.6 73.6h11.3a5 5 0 0 0-3-3c-.6-.3-1.4-.4-3.7-.1-3 .2-4.8.2-6.8-.6a10.9 10.9 0 0 1-5.2-4.4 1 1 0 0 1 1.7-1A8.9 8.9 0 0 0 39 68c1.7.7 3.1.7 6 .5 2.7-.3 3.6-.3 4.7.2a7 7 0 0 1 4.1 4.9H66a10 10 0 0 1 5-6.4c1.4-.7 2.5-.7 5.5-.3 3.2.4 4.8.3 6.7-.8.6-.3 1.2-.8 1.8-1.4 2.3-2.4 2.6-4 2-7.5-.4-2.6-.4-3.6.3-5 .8-1.7 2-2 5.2-2.2h.4a1 1 0 1 1 0 2h-.3c-2.5.1-3.2.3-3.5 1-.5 1-.5 1.7-.1 4 .7 4 .3 6.2-2.6 9.1-.7.7-1.4 1.3-2.2 1.7-2.3 1.4-4.3 1.5-8 1-2.5-.3-3.4-.3-4.2.2a8 8 0 0 0-4 4.6h12c3 0 5.5 2.2 5.3 5l-1.7 31c-.1 2.8-2.5 5-5.3 5h-36a5.4 5.4 0 0 1-5.4-5l-1.7-31c-.1-2.8 2.3-5 5.4-5Zm0 2c-2 0-3.4 1.3-3.4 2.8l1.7 31.1c.1 1.7 1.6 3 3.4 3h35.9c1.7 0 3.3-1.3 3.3-3l1.7-31c.1-1.6-1.3-3-3.3-3H40.6Zm58.1-24a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM97 110Zm103 121Zm99 0Z' fill='%23BDBDBD'/%3E%3Cpath d='M33.1 60c.6 0 1-.6.9-1.1-.2-1.2-.6-2-1.4-2.8-1.3-1.2-2.5-1.2-6.3-1h-3.4c-2.8 0-4.8-.8-6.3-2.7a11.5 11.5 0 0 1-1.6-12 1 1 0 1 0-1.9-.8c-2 5.1-1.3 9.8 2 14 1.8 2.4 4.3 3.5 7.7 3.6l3.6-.1c3.1-.2 4.2-.1 4.8.4.5.5.7 1 .8 1.6 0 .6.6 1 1.1.9Zm71.6-15.6a1 1 0 1 1-1.9-.8c2.2-5 1.3-8.8-1.6-12.7l-2-2.3v-.2c-.8-1-1.2-1.6-1.2-2.3 0-.6.1-1 .4-1.8l.6-1.5.1-.3c1.5-3.7 1.5-6.5-1-10a1 1 0 1 1 1.7-1c2.9 4 2.9 7.5 1.2 11.7l-.2.4-.5 1.4-.3 1c0 .2.2.5.7 1.2l2.1 2.5c3.3 4.5 4.3 9 1.9 14.7Z' fill='%23BDBDBD'/%3E%3C/svg%3E"
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography>404</Typography>
        It looks like something is missing!
      </Box>
      <Box>
        {" "}
        <Button
          variant="contained"
          sx={{ bgcolor: (theme) => theme.commonColors }}
          onClick={() => navigate("/homepage")}
        >
          Back to homePage
        </Button>
      </Box>
    </Box>
  );
};

export default DeniedPage;
