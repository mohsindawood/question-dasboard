import React from "react";
import {
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RestorePageOutlinedIcon from "@mui/icons-material/RestorePageOutlined";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const RootStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  "& .MuiInputBase-root": {
    alignItems: "start",
    fontSize: "22px",
    "& .MuiInputAdornment-root": {
      marginTop: theme.spacing(2.5),
      svg: {
        fontSize: "32px",
      },
    },
  },
}));

export default function DiscoursePaper() {
  return (
    <RootStyled>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Stack>
          <Typography variant="body2" color="text.secondary">
            Current Version
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tue June 8 2015 @ 10:01 PM
          </Typography>
        </Stack>
        <TextField variant="outlined" placeholder="Discourse" size="small" />
      </Stack>
      <Typography variant="h5">
        This is the answer back from AI. Source Code Pro Font is a monospace
        font that we use to write with According to the Boundary Theory
        presented in the document on Quantumism, Organa is an extent of an
        object. The document highlights that Organa is the substance in which
        properties and relations inhere, and that it is separate from the object
        being organized. Organization, which is a property of an object, is an
        extent of the object, not a feature. The document further explains that
        if organization is removed from an object, it would no longer be the
        same object, even if all the elements are present. Therefore, Organa is
        what fundamentally makes a thing what it is, and it is a dimension of a
        thing, which is real even though it has no spatial dimensions.
        <br />
        <br />
        Reference Pages:
      </Typography>
      <Box sx={{ height: 200 }}></Box>
      <TextField
        variant="outlined"
        placeholder="Discourse"
        defaultValue="Source Code Pro Font is a monospace font that we use to write with. Enter your questions here. This should grow up with the inquiry. "
        multiline
        rows={3}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Stack direction="row" spacing={4} justifyContent="space-between" mt={2}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<RestorePageOutlinedIcon />}
        >
          Replace
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<SystemUpdateAltIcon />}
        >
          Download
        </Button>
      </Stack>
    </RootStyled>
  );
}
