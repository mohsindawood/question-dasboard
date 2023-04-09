import React from 'react'
import Image from "next/image"
import { Grid, Box } from "@mui/material"
import LibraryStepper from "@/src/components/main/library/stepper"


export default function Book() {
     return (
          <Box mt={-3}>
               <Grid container spacing={2}>
                    <Grid item md={7}>
                         <Box sx={{
                              position: "relative",
                              height: "800px",
                              width: "100%",
                         }}>
                              <Image src="/book.png" alt="consecration book" layout="fill" objectFit="contain" />
                         </Box>
                    </Grid>
                    <Grid item md={5}>
                         <LibraryStepper />
                    </Grid>
               </Grid>
          </Box>
     )
}
