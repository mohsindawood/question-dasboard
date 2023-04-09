import * as React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  ListItem,
  List,
  Divider,
  TextField,
  InputAdornment,
  Stack,
  Grid,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        ".img-sec": {
          height: 990,
          width: "100%",
          position: "relative",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              bgcolor: "#262629",
              maxWidth: "260px",
              height: "100%",
              ".MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Box>
              <List>
                <ListItem>
                  <Typography variant="body1">title</Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Typography variant="body2" fontWeight={300}>
                    Title
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Box
                    sx={{
                      ".MuiInputBase-root": {
                        bgcolor: "#212121",
                        color: "common.white",
                        fieldset: {
                          borderColor: "#666666",
                          borderRadius: 0,
                        },
                        svg: {
                          fill: "#666666",
                        },
                      },
                    }}
                  >
                    <TextField
                      size="small"
                      variant="outlined"
                      placeholder="Search"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </ListItem>
                <Divider />
                <ListItem>
                  <Typography variant="body2" fontWeight={300}>
                    Pages
                  </Typography>
                </ListItem>
                <Divider />
              </List>
            </Box>
            <Tab
              icon={<img src="/file.png" height="200px" alt="tab-1" />}
              {...a11yProps(0)}
            />
            <Tab
              icon={<img src="/file2.png" height="200px" alt="tab-2" />}
              {...a11yProps(1)}
            />
            <Tab
              icon={<img src="/file3.png" height="200px" alt="tab-3" />}
              {...a11yProps(2)}
            />
          </Tabs>
        </Grid>
        <Grid item sm={12} md={9}>
          <Box mt={2}>
            <Typography variant="body2" ml={2}>
              Current Version
            </Typography>
            <Typography variant="body1" ml={2}>
              Tue June 8 2015 @ 10:01 PM
            </Typography>
            <TabPanel value={value} index={1}>
              <img src="/file.jpg" alt="tab-1" className="img-sec" />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <img src="/discoursefile.png" alt="tab-2" className="img-sec" />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <img src="/file.jpg" alt="tab-1" className="img-sec" />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
