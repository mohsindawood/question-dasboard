import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from "@mui/material/styles";
import { useDropzone } from 'react-dropzone';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const RootStyle = styled("div")(({ theme }) => ({
     padding: theme.spacing(2),
     ".dropzone": {
          border: "1px dashed #666666",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          padding: theme.spacing(2),
          svg: {
               height: 36,
               width: 36,
               fill: "#666666"
          },
          ".MuiTypography-root": {
               fontSize: "12px",
               color: "#666666"
          }
     }
}));

function MyDropzone(props) {
     const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

     const files = acceptedFiles.map(file => (
          <li key={file.path}>
               {file.path} - {file.size} bytes
          </li>
     ));

     return (
          <RootStyle>
               <Box {...getRootProps({ className: 'dropzone' })} >
                    <input {...getInputProps()} />
                    <ImageOutlinedIcon />
                    <Typography variant='body2'>Upload Document</Typography>
                    <Typography variant='body2'>Drop your .pdf or .txt files here</Typography>
               </Box>
               <aside>

                    <ul>{files}</ul>
               </aside>
          </RootStyle>
     );
}
export default MyDropzone;