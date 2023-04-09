import React from "react";
import { styled } from "@mui/material/styles";
import {
  Stack,
  Divider,
  Grid,
  ListItem,
  List,
  Typography,
  Box,
  IconButton,
  TextField,
  Switch,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import ProfileUpload from "@/src/components/upload/profileUpload";
import AlignHorizontalLeftRoundedIcon from "@mui/icons-material/AlignHorizontalLeftRounded";
import AlignHorizontalCenterRoundedIcon from "@mui/icons-material/AlignHorizontalCenterRounded";
import AlignHorizontalRightRoundedIcon from "@mui/icons-material/AlignHorizontalRightRounded";
import AlignVerticalTopRoundedIcon from "@mui/icons-material/AlignVerticalTopRounded";
import AlignVerticalCenterRoundedIcon from "@mui/icons-material/AlignVerticalCenterRounded";
import AlignVerticalBottomRoundedIcon from "@mui/icons-material/AlignVerticalBottomRounded";
import FormatAlignCenterRoundedIcon from "@mui/icons-material/FormatAlignCenterRounded";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";

const data = [
  <FormatAlignLeftRoundedIcon />,
  <FormatAlignCenterRoundedIcon />,
  <AlignHorizontalLeftRoundedIcon />,
  <AlignHorizontalCenterRoundedIcon />,
  <AlignHorizontalRightRoundedIcon />,
  <AlignVerticalTopRoundedIcon />,
  <AlignVerticalCenterRoundedIcon />,
  <AlignVerticalBottomRoundedIcon />,
];
export default function SideBarList() {
  const [values, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (values < 0) {
      setValue(0);
    } else if (values > 100) {
      setValue(100);
    }
  };

  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <List>
      <ListItem className="first-list">
        <Box sx={{ width: "100%" }}>
          <Typography variant="body1" fontWeight={200} px={2} my={1}>
            Profile
          </Typography>
          <Divider />
          <ProfileUpload />
        </Box>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body2" fontWeight={300}>
          Menu
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "#666666",
          }}
        >
          <AddRoundedIcon />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body2" fontWeight={300}>
          Menu
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "#666666",
          }}
        >
          <AddRoundedIcon />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body2" fontWeight={300}>
          Menu
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "#666666",
          }}
        >
          <AddRoundedIcon />
        </IconButton>
      </ListItem>
      <Divider />
      <ListItem>
        <Stack direction="row" alignItems="center" spacing={0}>
          {data.map((value) => (
            <IconButton
              size="small"
              key={Math.random()}
              sx={{
                color: "#666666",
                height: 25,
                width: 25,
                svg: {
                  height: 20,
                  width: 20,
                },
              }}
            >
              {value}
            </IconButton>
          ))}
        </Stack>
      </ListItem>
      <Divider />
      <ListItem>
        <Stack spacing={2}>
          <Typography variant="body2" fontWeight={300}>
            Place Holder
          </Typography>
          <TextField
            multiline
            rows={3}
            variant="filled"
            placeholder=""
            sx={{
              color: "#fff",
            }}
          />
        </Stack>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body2" fontWeight={300}>
          Menu
        </Typography>
        <Switch defaultChecked size="small" color="error" />
      </ListItem>
      <Divider />
      <ListItem>
        <Typography variant="body2" fontWeight={300}>
          Menu
        </Typography>
        <Switch size="small" color="error" />
      </ListItem>
      <Divider />
      <ListItem>
        <Box px={2} sx={{ width: "100%" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="body2" fontWeight={300}>
                Opacity
              </Typography>
            </Grid>
            <Grid item xs>
              <Slider
                size="small"
                value={typeof values === "number" ? values : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                sx={{
                  color: "common.white",
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                value={values}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 100,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
                sx={{
                  width: "42px",
                  input: {
                    color: "#fff",
                    p: 0,
                  },
                  fieldset: {
                    border: "none",
                  },
                }}
              />
            </Grid>
          </Grid>
          <FormControl
            sx={{
              mt: 1,
              ".MuiInputBase-root": {
                color: "common.white",
                borderRadius: 0,
                bgcolor: "#121212",
                fontSize: "12px",
                svg: {
                  color: "#fff",
                },
              },
            }}
            size="small"
            fullWidth
          >
            <Select value={age} onChange={handleChange}>
              <MenuItem value={10}>Blending: Normal</MenuItem>
              <MenuItem value={20}>Blending: Bold</MenuItem>
              <MenuItem value={30}>Blending: ExtraBold</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </ListItem>
      <ListItem>
        <Typography variant="body2" fontWeight={300}>
          Button
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "#666666",
          }}
        >
          <SystemUpdateAltIcon />
        </IconButton>
      </ListItem>
    </List>
  );
}
