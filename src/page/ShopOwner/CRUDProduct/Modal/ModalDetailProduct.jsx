import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { formatPrice } from "../../../../utils/formatter";
import { Grid, Rating, TextField, Tooltip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ToggleFocusInput from "../../../../components/customInputFile/ToggleFocusInput";
import { useDispatch } from "react-redux";
import { updateUserAPI } from "../../../../redux/slice/userInfoSlice";
import { getProductById, update } from "../../../../api";
import { ListTags } from "../../../../components/ListTags/ListTags";
import { SizesList } from "../../../../components/SizeList/SizeList";
import FormUpdateCategory from "./formUpdateCategory";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "1100px",
};

export const ModalDetailProduct = ({
  handleOpenModalDetail,
  open,
  detailProductId,
  handleGetAllProduct,
}) => {
  const [detailProduct, setDetailProduct] = useState({});

  const [imageProduct, setImageProduct] = useState(null);
  const [Category, setCategory] = useState("");
  const [listTags, setListTags] = useState([]);
  const [listSizes, setListSizes] = useState([]);

  const [updateProductName, setUpdateProductName] = useState(false);
  const [updatePrice, setUpdatePrice] = useState(false);
  const [updateTags, setUpdateTags] = useState(false);
  const [updateCategoryId, setUpdateCategoryId] = useState(false);

  const [openSizeList, setOpenSizeList] = useState(false);

  const handleClose = () => {
    setImageProduct(null);
    setUpdateProductName(false);
    setUpdatePrice(false);
    setUpdateTags(false);
    setOpenSizeList(false);
    handleOpenModalDetail();
  };

  const handleSetImageProduct = (i) => {
    setImageProduct(i);
  };

  const handleSelectSize = (result) => {
    setListSizes(result);
  };

  const handleSetSize = (data) => {
    const listSize = [...data];
    let result = listSize.some(
      (item) => item.includes("Thời trang") || item.includes("Quần áo")
    );
    setOpenSizeList(result);
  };

  const handleSelectTags = (result) => {
    setListTags((preState) => {
      handleSetSize(result);
      return result;
    });
  };

  const updateDataProduct = (data) => {
    const id = detailProduct?._id;
    toast
      .promise(update({ ...data, id }), {
        pending: "Đang cập nhật chỉnh sửa",
      })
      .then((res) => {
        if (!res.error) {
          toast.success("Cập nhật thành công");
          handleGetAllProduct();
        }
      });
  };

  const handleUpdate = (newName, key) => {
    let data = {};
    if (key === "tagsId" || key === "size" || key === "tagsId&Size") {
      switch (key) {
        case "tagsId":
          data = { [key]: listTags, size: [] };
          break;
        case "size":
          data = { [key]: listSizes };
          break;
        case "tagsId&Size":
          data = { tagsId: listTags, size: listSizes };
          break;
        default:
          break;
      }
    } else {
      data = { [key]: newName };
    }
    updateDataProduct(data);
  };

  const handleUpdateCategoryId = async (categoryData) => {
    const uploadPromises = categoryData.map(async (item) => {
      let formData = new FormData();
      formData.append("file", item?.image);
      formData.append("upload_preset", "ReactUpload");
      delete item["imageToDisplay"];
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dlb4ooi7n/upload",
        formData
      );
      if (res) {
        item.image = res.data.secure_url;
      }
      return item;
    });
    const updatedItems = await Promise.all(uploadPromises);

    let data = { categoryId: updatedItems };
    updateDataProduct(data);
  };

  const handleGetProductById = async (id) => {
    const res = await getProductById(id);
    if (!res.error) {
      setDetailProduct(res);
    }
  };

  useEffect(() => {
    if (detailProductId) handleGetProductById(detailProductId);
  }, [handleGetAllProduct]);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
            {/* right */}
            <Box
              sx={{
                width: "500px",
                height: "500px",
              }}
            >
              {!imageProduct ? (
                <img
                  src={
                    detailProduct?.image?.length > 0
                      ? detailProduct?.image[0]
                      : null
                  }
                  alt={detailProduct?.name}
                  style={{
                    width: "100%",
                    border: "1px solid",
                  }}
                />
              ) : (
                <img
                  src={imageProduct}
                  alt={detailProduct?.name}
                  style={{ width: "100%", border: "1px solid" }}
                />
              )}

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 1,
                  "& .swiper": {
                    width: "300px",
                    height: "100px",
                  },
                  "& .swiper-slide": {
                    textAlign: "center",
                    fontSize: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              >
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={30}
                >
                  {detailProduct?.image?.map((i, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <Grid>
                          <img
                            src={i}
                            alt={i}
                            style={{ width: "80px", border: "1px solid" }}
                            onClick={() => handleSetImageProduct(i)}
                          />
                        </Grid>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            </Box>

            {/* left */}
            <Box sx={{ width: "1000px" }}>
              {/* name */}
              <Tooltip title="click to update">
                <Typography
                  variant="h6"
                  onClick={() => setUpdateProductName(!updateProductName)}
                >
                  {detailProduct?.name}
                </Typography>
              </Tooltip>
              {updateProductName && (
                <ToggleFocusInput
                  multiline
                  value={detailProduct?.name}
                  onChangedValue={(e) => handleUpdate(e, "name")}
                  // inputFontSize="15px"
                />
              )}

              {/* Gia ca */}
              <Box
                sx={{
                  p: 2,
                  bgcolor: "#f5f5f5",
                  color: "red",
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  onClick={() => setUpdatePrice(!updatePrice)}
                >
                  {formatPrice(detailProduct?.price)}
                </Typography>
                {updatePrice && (
                  <ToggleFocusInput
                    multiline
                    value={detailProduct?.price}
                    onChangedValue={(e) => handleUpdate(e, "price")}
                    // inputFontSize="15px"
                  />
                )}
              </Box>

              {/* tags */}
              <Box sx={{ mt: 3, width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    mt: 3,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      color: "#757575",
                      width: "25%",
                      cursor: "pointer",
                    }}
                  >
                    <Typography onClick={() => setUpdateTags(!updateTags)}>
                      Loại sản phẩm
                    </Typography>
                  </Box>
                  {detailProduct?.tagsId?.length === 0 ? (
                    <Typography onClick={() => setUpdateTags(!updateTags)}>
                      Thêm loại
                    </Typography>
                  ) : (
                    <Box sx={{ display: "flex", gap: 3 }}>
                      {detailProduct?.tagsId?.map((item, index) => {
                        return (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              cursor: "pointer",
                              mb: 1,
                              border: "1px solid black",
                              p: "5px 10px",
                            }}
                          >
                            <Typography variant="caption">{item}</Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </Box>

                {updateTags && (
                  <ListTags
                    tagsIdData={detailProduct?.tagsId}
                    handleSelectTags={handleSelectTags}
                  />
                )}
                {openSizeList && detailProduct?.size?.length === 0 && (
                  <SizesList
                    open={openSizeList}
                    handleSelectSize={handleSelectSize}
                  />
                )}
                {updateTags && (
                  <Button
                    variant="contained"
                    sx={{ bgcolor: (theme) => theme.commonColors }}
                    onClick={(e) =>
                      handleUpdate(e, openSizeList ? "tagsId&Size" : "tagsId")
                    }
                  >
                    Xong!
                  </Button>
                )}
              </Box>

              {/* phan loai */}
              <Box sx={{ mt: 3, width: "100%" }}>
                <Box sx={{ display: "flex", mt: 3, width: "100%" }}>
                  <Box
                    sx={{
                      color: "#757575",
                      width: "20%",
                      cursor: "pointer",
                      mb: 2,
                    }}
                  >
                    <Typography
                      onClick={() => setUpdateCategoryId(!updateCategoryId)}
                    >
                      Phân loại
                    </Typography>
                  </Box>
                  {detailProduct?.categoryId?.length === 0 ? (
                    <Typography
                      onClick={() => setUpdateCategoryId(!updateCategoryId)}
                      sx={{ color: "#757575", cursor: "pointer" }}
                    >
                      Thêm các phân loại sủa sản phẩm
                    </Typography>
                  ) : (
                    <Box sx={{ display: "flex", gap: 3 }}>
                      {detailProduct?.categoryId?.map((item, index) => {
                        return (
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              cursor: "pointer",
                              mb: 1,
                              border: "1px solid #757575",
                              p: "5px",
                            }}
                            // onClick={() => {
                            //   setDisplayImage(item.image);
                            //   setSelectColor(item.name);
                            // }}
                          >
                            <img
                              src={item?.image}
                              alt={item?.name}
                              style={{ width: "30px", height: "30px" }}
                            />
                            <Typography variant="caption">
                              {item?.name}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  )}
                </Box>
                <FormUpdateCategory
                  open={updateCategoryId}
                  handleUpdateCategoryId={handleUpdateCategoryId}
                />
              </Box>

              {/* kich co */}
              <Box sx={{ mt: 3, width: "100%" }}>
                <Box sx={{ display: "flex", mt: 3, width: "100%" }}>
                  <Box
                    sx={{ color: "#757575", width: "20%", cursor: "pointer" }}
                    onClick={() => setOpenSizeList(!openSizeList)}
                  >
                    {detailProduct?.size?.length > 0 && "Kích cỡ"}
                  </Box>
                  <Box sx={{ display: "flex", gap: 3 }}>
                    {detailProduct?.size?.map((item, index) => {
                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                            mb: 1,
                            border: "1px solid #757575",
                            p: "5px 10px",
                          }}
                        >
                          <Typography variant="caption">{item}</Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
                {openSizeList && detailProduct?.size?.length >= 0 && (
                  <SizesList
                    sizeData={detailProduct?.size}
                    open={openSizeList}
                    handleSelectSize={handleSelectSize}
                  />
                )}
                {openSizeList && detailProduct?.size?.length >= 0 && (
                  <Button
                    variant="contained"
                    sx={{ bgcolor: (theme) => theme.commonColors }}
                    onClick={(e) => handleUpdate(e, "size")}
                  >
                    Xong!
                  </Button>
                )}
              </Box>

              {/* so luong */}
              <Box sx={{ display: "flex", mt: 3, width: "100%" }}>
                <Box sx={{ color: "#757575", width: "20%" }}>Số lượng</Box>
                <Typography>
                  Số lượng có sẵn:
                  {detailProduct?.quantity - detailProduct?.sold}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
