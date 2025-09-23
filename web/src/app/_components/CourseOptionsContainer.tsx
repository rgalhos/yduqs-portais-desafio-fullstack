"use client";

import { Box, Grid } from "@mui/material";
import { CourseOptionCard } from "@/components/CourseOptionCard/CourseOptionCard";
import { useState } from "react";
import { ICourseOption } from "@/shared/interfaces/course.interface";
import { OfferDetailsDrawer } from "@/components/OfferDetailsDrawer/OfferDetailsDrawer";

export const CourseOptionsContainer = () => {
  const courses: ICourseOption[] = [
    {
      currentPrice: 2613.6,
      originalPrice: 4752.0,
      installments: [
        { months: 1, value: 2613.6 },
        { months: 3, value: 900.9 },
        { months: 6, value: 465.3 },
        { months: 9, value: 320.1 },
        { months: 12, value: 247.5 },
        { months: 15, value: 200.96 },
        { months: 18, value: 169.95 },
      ],
      modality: "Presencial",
      shift: "Manhã",
      location: {
        unit: "Campinas - Vila Industrial",
        address:
          "Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas",
      },
    },
  ];
  const [currentOffer, setCurrentOffer] = useState<ICourseOption | null>();
  const [offerDrawerOpen, setOfferDrawerOpen] = useState(false);

  const handleOpenOffer = (offer: ICourseOption | null) => {
    setCurrentOffer(offer);
    setOfferDrawerOpen(true);
  };

  const handleCloseOffer = () => {
    setOfferDrawerOpen(false);
  };

  return (
    <>
      <Box className="vw-adjustable">
        <Grid container gap={6} flexWrap={{ xs: "wrap", sm: "nowrap" }}>
          {courses.map((course, i) => (
            <Grid key={i} width="100%" maxWidth={{ xs: "100%", sm: "380px" }}>
              <CourseOptionCard
                type="detailed"
                currentPrice={course.currentPrice}
                originalPrice={course.originalPrice}
                installment={course.installments.reduce((prev, curr) =>
                  curr.months > prev.months ? curr : prev
                )}
                modality={course.modality}
                shift={course.shift}
                location={course.location}
                onAction={() => handleOpenOffer(course)}
              />
            </Grid>
          ))}

          <Grid width="100%" maxWidth={{ xs: "100%", sm: "380px" }}>
            <CourseOptionCard
              type="info"
              info="Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!"
              modality="Digital (EaD)"
              location={{
                unit: "Campinas - Vila Industrial",
                address:
                  "Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas",
              }}
              onAction={() => void 0}
            />
          </Grid>
        </Grid>

        <OfferDetailsDrawer
          installments={currentOffer?.installments}
          open={offerDrawerOpen}
          onClose={handleCloseOffer}
        />
      </Box>
    </>
  );
};
