"use client";

import { Box, Grid } from "@mui/material";
import { CourseOptionCard } from "@/components/CourseOptionCard/CourseOptionCard";

export const CourseOptionsContainer = () => {
  return (
    <Box className="vw-adjustable">
      <Grid container gap={6} flexWrap={{ xs: "wrap", sm: "nowrap" }}>
        <Grid width="100%" maxWidth={{ xs: "100%", sm: "380px" }}>
          <CourseOptionCard
            type="detailed"
            fullPrice="R$ 4.752,00"
            noInstallments={18}
            installmentPrice="R$ 169,95"
            price="R$ 2.613,60"
            modality="Presencial"
            shift="Manhã"
            location={{
              unit: "Campinas - Vila Industrial",
              address:
                "Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas",
            }}
            onAction={() => void 0}
          />
        </Grid>
        <Grid width="100%" maxWidth={{ xs: "100%", sm: "380px" }}>
          <CourseOptionCard
            type="detailed"
            fullPrice="R$ 4.752,00"
            noInstallments={18}
            installmentPrice="R$ 169,95"
            price="R$ 2.613,60"
            modality="Presencial"
            shift="Manhã"
            location={{
              unit: "Campinas - Vila Industrial",
              address:
                "Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas",
            }}
            onAction={() => void 0}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
