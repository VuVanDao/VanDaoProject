import React, { useEffect, useState } from "react";
import { data } from "../../Data/CartData";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import Paper from "@mui/material/Paper";
import Header from "../Header";
import { formatPrice } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserAPI,
  userInfoSelector,
} from "../../redux/slice/userInfoSlice";
import { toast } from "react-toastify";

const CartDetail = () => {
  const navigate = useNavigate();
  const [dataCardDetail, setDataCardDetail] = useState([]);
  const userInfo = useSelector(userInfoSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      setDataCardDetail(userInfo?.cartItem);
    }
  }, [userInfo]);

  const handleCheckOut = (item) => {
    navigate(`/checkout?id=${item?.ProductId}`, {
      state: { data: item, check: true },
    });
  };
  const deleteFromCart = (id) => {
    const result = [...dataCardDetail];
    toast
      .promise(
        dispatch(
          updateUserAPI({
            cartItem:
              result?.length === 1
                ? []
                : [...result.filter((i) => i.ProductId !== id)],
          })
        ),
        {
          pending: ".....",
        }
      )
      .then((res) => {
        if (!res.error) {
          toast.success("Ok");
        }
      });
  };
  return (
    <Box>
      <Header showHeader={true} />
      <Container sx={{ p: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell align="center">Đơn giá</TableCell>
                <TableCell align="center">Số tiền</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="center">Thao tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCardDetail?.map((item) => (
                <TableRow
                  key={item?.ProductId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      display: "flex",
                      // justifyContent: "space-between",
                      alignItems: "center",
                      width: "655px",
                      gap: 3,
                    }}
                  >
                    <img
                      src={item.image}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "5px",
                        border: "1px solid",
                      }}
                    />
                    <Typography
                      sx={{
                        overflow: "hidden",
                        fontSize: "14px",
                        width: "75%",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {formatPrice(
                      dataCardDetail?.find((i) => i.id === item?.id)?.price /
                        dataCardDetail?.find((i) => i.id === item?.id)?.quantity
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {formatPrice(item?.price)}
                  </TableCell>
                  <TableCell align="center">{item?.quantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{
                        mr: "15px",
                        bgcolor: (theme) => theme.commonColors,
                        color: "white",
                      }}
                      onClick={() => handleCheckOut(item)}
                    >
                      Đặt hàng
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      Xoá
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default CartDetail;
