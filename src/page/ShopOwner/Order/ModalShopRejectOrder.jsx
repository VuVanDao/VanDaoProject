import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { updateOrder } from "../../../api";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalShopRejectOrder = ({
  openRejectOrder,
  handleRejectOrder,
  item,
}) => {
  const handleClose = () => handleRejectOrder();
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleConfirmReject = async () => {
    await updateOrder(
      { status: "REJECTED", textMessage: text },
      item?._id
    ).then((res) => {
      if (!res.error) {
        toast.success("Đã huỷ đơn");
        handleRejectOrder(true);
      }
    });
  };

  return (
    <div>
      <Modal
        open={openRejectOrder}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">lí do huỷ đơn</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={text}
              label="lí do huỷ đơn"
              onChange={handleChange}
            >
              <MenuItem value={"Sản phẩm có sự thay đổi về giá cả"}>
                Sản phẩm có sự thay đổi về giá cả
              </MenuItem>
              <MenuItem value={"Sản phẩm vừa hết hàng"}>
                Sản phẩm vừa hết hàng
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{
              bgcolor: (theme) => theme.commonColors,
              color: "white",
              mt: 3,
            }}
            onClick={handleConfirmReject}
          >
            Xác nhận huỷ đơn
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
