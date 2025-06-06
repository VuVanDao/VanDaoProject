import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import React, { useEffect, useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

const PurchaseDetail = () => {
  const UrlAvailable = {
    allOrder: "/user/purchase/all_order",
    pendingOrder: "/user/purchase/pending_order",
    deliveringOrder: "/user/purchase/delivering_order",
    doneOrder: "/user/purchase/done_order",
    rejectOrder: "/user/purchase/reject_order",
    acceptedOrder: "/user/purchase/accepted_order",
  };
  const location = useLocation();
  const defaultActiveURL = () => {
    let activeUrl = UrlAvailable.allOrder;
    Object.values(UrlAvailable).forEach((url) => {
      if (location.pathname.includes(url)) {
        activeUrl = url;
      }
    });
    return activeUrl;
  };
  const [value, setValue] = useState(defaultActiveURL());

  useEffect(() => {}, [location?.pathname]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          bgcolor: "white",
          boxShadow: "0 0 .8125rem 0 rgba(0, 0, 0, .05)",
          p: "20px 30px",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  bgcolor: "red",
                },
                "& .MuiButtonBase-root": {
                  color: "black",
                },
                "& .MuiButtonBase-root.Mui-selected": {
                  color: "red",
                },
              }}
            >
              <Tab
                label="Tất cả"
                value="/user/purchase/all_order"
                component={Link}
                to={`all_order`}
                sx={{ mr: 5 }}
              />

              <Tab
                label="Chờ xác nhận"
                value="/user/purchase/pending_order"
                component={Link}
                to={`pending_order`}
                sx={{ mr: 5 }}
              />
              <Tab
                label="Đã xác nhận"
                value="/user/purchase/accepted_order"
                component={Link}
                to={`accepted_order`}
                sx={{ mr: 5 }}
              />
              <Tab
                label="Đang chuyển"
                value="/user/purchase/delivering_order"
                component={Link}
                to={`delivering_order`}
                sx={{ mr: 5 }}
              />
              <Tab
                label="Đã xong"
                value="/user/purchase/done_order"
                component={Link}
                to={`done_order`}
                sx={{ mr: 5 }}
              />
              <Tab
                label="Đã huỷ"
                value="/user/purchase/reject_order"
                component={Link}
                to={`reject_order`}
                sx={{ mr: 5 }}
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          bgcolor: "white",
          boxShadow: "0 0 .8125rem 0 rgba(0, 0, 0, .05)",
          p: "20px 30px",
          mt: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default PurchaseDetail;
