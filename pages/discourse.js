import React from 'react'
import DiscoursePaper from "@/src/components/main/discourse/discoursePaper"
import DiscourseNote from "@/src/components/main/discourse/discourseNote"
import { Box, Grid } from "@mui/material"
export default function Discourse() {
     return (
          <Box sx={{
               mt: -13,
          }}>
               <Grid container spacing={4}>
                    <Grid item md={7}>
                         <DiscoursePaper />
                    </Grid>
                    <Grid item md={5}>
                         <DiscourseNote />
                    </Grid>
               </Grid>
          </Box>
     )
}
