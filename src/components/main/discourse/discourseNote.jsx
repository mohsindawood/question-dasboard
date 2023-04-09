import React from 'react'
import { Typography,
  Box,
  TextField,
  InputAdornment,
  TableCell,
  TableBody,
  Table,
  TableRow,
  Paper,
  Divider,
  Stack,
  IconButton
} from '@mui/material'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';


const rows = [
     {
        icon:<InsertDriveFileOutlinedIcon/>,
        page:"Page 23",
        update:"Last Update",
        date:"01/10/2023",
        color:true,
     },
     {
        icon:<InsertDriveFileOutlinedIcon/>,
        page:"Page 24",
        update:"Last Update",
        date:"01/10/2023"
     },
     {
        icon:<InsertDriveFileOutlinedIcon/>,
        page:"Page 25",
        update:"Last Update",
        date:"01/10/2023",
        color:true,
     },
     {
        icon:<InsertDriveFileOutlinedIcon/>,
        page:"Page 22",
        update:"Last Update",
        date:"01/10/2023"
     }
   ];

const RootStyled = styled(Box)(({ theme }) => ({
     marginTop:theme.spacing(4),
    //  padding:theme.spacing(2),
     background:"#212121",
     ".input-sec":{
          ".MuiInputBase-root": {
               color: "#666666",
               fieldset: {
                 borderColor: "#666666",
                 borderRadius: 0
               },
               svg: {
                 fill: "#666666"
               }
             }
     },
     ".table-sec":{
          ".MuiTableCell-root":{
               border:'none',
               color:"#fff"
          },
          ".bgcolor":{
             background:"#f0f8ff08"
          }
     },   
     ".Paper-sec":{
      padding:theme.spacing(2),
     margin:theme.spacing(2),


     }
}))
export default function DiscourseNote() {
  return (
    <RootStyled>
     <Typography variant='h4'mb={2} p={2}> Notes</Typography>
     <Box className="input-sec" mb={2} p={2}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>)
            }} />
        </Box>
        <Box p={2}>
        <Table className='table-sec'>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.page} className={row.color && "bgcolor"}>
              <TableCell sx={{svvg:{
                height:20,
                width:20
              }}}>{row.icon}</TableCell>
              <TableCell align="right">{row.page}</TableCell>
              <TableCell align="right">{row.update}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
      <Paper className="Paper-sec">
      <Typography variant='body2' color="text.secondary">Current Version</Typography>
     <Typography variant='body1' color="text.secondary">Tue June 8 2015 @ 10:01 PM</Typography>
     <Typography variant='h5'>Source Code Pro Font is a monospace Here are some notes I took on this font that we use to write with According to the Boundary Theory presented in the document on Quantumism, Organa is an extent of an object. The document highlights that Organa is the substance in which properties and relations inhere, and that it is separate from the object being organized. Organization, which is a property of an object, is a</Typography>
      </Paper>
      <Divider/>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" p={2}>
      <Typography variant='body1'>Download Notes</Typography>
      <IconButton sx={{color:"common.white"}}>
      <SystemUpdateAltIcon />
      </IconButton>
      </Stack>
    </RootStyled>
  )
}
