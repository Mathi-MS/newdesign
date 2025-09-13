import {
  Autocomplete,
  Box,
  Chip,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  btnStyleContainer,
  iconStyle,
  styleModalNew,
  styleModelLarge,
} from "../assets/Styles/CustomModalStyle";
import CustomButton from "../Custom/CustomButton";
import { CustomInput } from "../Custom/CustomInput";
import { ticketsSchema } from "../assets/Validation/Schema";
import { useState } from "react";
import { showError, showSuccess } from "../Custom/CustomToast";
import { useNavigate } from "react-router-dom";
import { useCityApi } from "../Hooks/city";
import { CustomAutocomplete } from "../Custom/CustomAutocomplete";
import {
  CustomAutocompleteStyles,
  CustomInputStyles,
} from "../assets/Styles/CustomStyles";

const CustomTicketModel = ({
  open,
  onClose,
  onSubmit,
  userData,
  isEdit,
}: any) => {
  const navigate = useNavigate();
  const { mutate: cityFunction } = useCityApi();
  const [isloading, setLoading] = useState<boolean>(false);
  const [storageLocation, setStorageLocation] = useState<
    (string | { title: string; year: number })[]
  >([]);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketsSchema),
    defaultValues: {
      fgCode: "",
      uom: "",
      batch: [],
      storageLocation: [],
    },
  });

  const onsubmit = (data: any) => {
    console.log("Form submitted:", data);
  };
  const handleClose = () => {
    reset();
    onClose();
  };
  const cityData = {
    data: [
      { id: "C001", cityName: "Chennai" },
      { id: "C002", cityName: "Coimbatore" },
      { id: "C003", cityName: "Madurai" },
      { id: "C004", cityName: "Tiruchirappalli" },
      { id: "C005", cityName: "Salem" },
      { id: "C006", cityName: "Erode" },
      { id: "C007", cityName: "Vellore" },
      { id: "C008", cityName: "Tirunelveli" },
      { id: "C009", cityName: "Thanjavur" },
      { id: "C010", cityName: "Nagercoil" },
    ],
  };
  const uomData = [
    { title: "b1", label: "b1" },
    { title: "b2", label: "b2" },
    { title: "b3", label: "b3" },
  ];
  const slData = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];
  const batchData = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: "999999999" }}
        >
          <Box
            sx={{
              ...styleModalNew,
              ...styleModelLarge,
              width: { xs: "95vw", sm: "90vw", md: "800px" },
              maxWidth: "100%",
              maxHeight: { xs: "85vh", md: "90vh" },
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              p: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontSize: "14px", fontFamily: "SemiBold_M" }}
              >
                {isEdit ? "Edit Tickets" : "Add Tickets"}
              </Typography>
              <IconButton onClick={handleClose} sx={iconStyle}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              component={"form"}
              onSubmit={handleSubmit(onsubmit)}
              sx={{
                m: "0px 0px 16px 0px",
                display: "grid",
                gap: { xs: "0.75rem", sm: "1rem" },
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                flex: 1,
                overflowY: "auto",
                pr: 1,
              }}
            >
              <CustomAutocomplete
                label="Fg code"
                options={
                  cityData?.data.map((city) => ({
                    title: city.id,
                    label: city.cityName,
                  })) || []
                }
                name="fgCode"
                control={control}
                errors={errors}
                required
                placeholder="Select FG Code"
                boxSx={{ width: "100%" }}
              />
              <CustomInput
                label="Material Code Description"
                required
                placeholder="Enter your Material Code Description"
                type="text"
                name="materialCodeDescription"
                register={register}
                errors={errors}
                boxSx={{ mt: "10px" }}
              />
              <CustomAutocomplete
                label="UOM"
                options={uomData}
                name="uom"
                control={control}
                errors={errors}
                required
                placeholder="Select UOM"
                boxSx={{ width: "100%" }}
              />
              <CustomInput
                label="Qty"
                required
                placeholder="Enter your Qty"
                type="text"
                name="qty"
                register={register}
                errors={errors}
                boxSx={{ mt: "10px" }}
              />
              {/* Storage Start  */}
              <Controller
                name="storageLocation"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={slData}
                    getOptionLabel={(option) =>
                      typeof option === "string" ? option : option.title
                    }
                    freeSolo
                    limitTags={1}
                    value={field.value}
                    onChange={(_, newValue) => {
                      field.onChange(newValue);
                    }}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => {
                        if (!option) return null;
                        return (
                          <Chip
                            variant="outlined"
                            label={
                              typeof option === "string" ? option : option.title
                            }
                            {...getTagProps({ index })}
                            key={index}
                          />
                        );
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        focused
                        sx={{
                          ...CustomInputStyles,
                          ...CustomAutocompleteStyles,
                          width: "100%",
                        }}
                        label="Storage Location (SL)"
                        required
                        placeholder="Select Storage Location"
                        error={!!errors.storageLocation}
                        helperText={
                          errors.storageLocation
                            ? errors.storageLocation.message
                            : ""
                        }
                      />
                    )}
                  />
                )}
              />

              {/* Storage End  */}
              <CustomInput
                label="Depot code"
                required
                placeholder="Enter your Depot code"
                type="text"
                name="depotCode"
                register={register}
                errors={errors}
              />
              {/* Batch Start  */}
              <Controller
                name="batch"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <Autocomplete
                    multiple
                    options={batchData}
                    getOptionLabel={(option) =>
                      typeof option === "string" ? option : option.title
                    }
                    freeSolo
                    limitTags={1}
                    value={field.value}
                    onChange={(_, newValue) => {
                      field.onChange(newValue);
                    }}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => {
                        if (!option) return null;
                        return (
                          <Chip
                            variant="outlined"
                            label={
                              typeof option === "string" ? option : option.title
                            }
                            {...getTagProps({ index })}
                            key={index}
                          />
                        );
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        focused
                        sx={{
                          ...CustomInputStyles,
                          ...CustomAutocompleteStyles,
                          width: "100%",
                        }}
                        label="Batch"
                        placeholder="Select Batch"
                        required
                        error={!!errors.batch}
                        helperText={errors.batch ? errors.batch.message : ""}
                      />
                    )}
                  />
                )}
              />
              {/* Batch End  */}
              <CustomInput
                label="Profit centre"
                required
                placeholder="Enter your Profit centre"
                type="text"
                name="profitCentre"
                register={register}
                errors={errors}
              />
              <CustomInput
                label="Brand"
                required
                placeholder="Enter your Brand"
                type="text"
                name="brand"
                register={register}
                errors={errors}
              />
              <CustomInput
                label="Sub Cat"
                required
                placeholder="Enter your Sub Cat"
                type="text"
                name="subCat"
                register={register}
                errors={errors}
              />
              <CustomInput
                label="Remarks"
                required
                placeholder="Enter your Remarks"
                type="text"
                name="remarks"
                register={register}
                errors={errors}
                boxSx={{ gridColumn: { xs: "span 1", md: "span 2" } }}
              />
            </Box>
            <Box
              sx={{
                ...btnStyleContainer,
                flexDirection: { xs: "column-reverse", sm: "row" },
                gap: { xs: 1, sm: 2 },
                position: "sticky",
                bottom: 0,
                background: "#fff",
                pb: { xs: 1, sm: 0 },
                pt: { xs: 1, sm: 0 },
              }}
            >
              <CustomButton
                type="button"
                variant="outlined"
                label="Cancel"
                boxSx={{
                  backgroundColor: "transparent",
                  color: "var(--primary)",
                  border: " 2px solid var(--primary) !important",
                  width: { xs: "100%", sm: "auto" },
                }}
                onClick={() => handleClose()}
              />
              <CustomButton
                type="submit"
                variant="contained"
                size="medium"
                label={isEdit ? "Update Ticket" : "Add Tickets"}
                onClick={handleSubmit(onsubmit)}
                loading={isloading}
                boxSx={{ width: { xs: "100%", sm: "auto" } }}
              />
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CustomTicketModel;
