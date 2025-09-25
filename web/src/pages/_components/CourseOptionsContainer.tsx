"use client";

import { Box, Grid } from "@mui/material";
import { CourseOptionCard } from "@/components/CourseOptionCard/CourseOptionCard";
import { useState } from "react";
import { IOffer } from "@/shared/interfaces/offer.interface";
import { OfferDetailsDrawer } from "@/components/OfferDetailsDrawer/OfferDetailsDrawer";

export interface ICourseOptionsContainerProps {
  offers: IOffer[];
}

export const CourseOptionsContainer = ({
  offers,
}: ICourseOptionsContainerProps) => {
  const [currentOffer, setCurrentOffer] = useState<IOffer | null>();
  const [offerDrawerOpen, setOfferDrawerOpen] = useState(false);

  const handleOpenOffer = (offer: IOffer | null) => {
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
          {offers.map((offer, i) => (
            <Grid key={i} width="100%" maxWidth={{ xs: "100%", sm: "380px" }}>
              {Array.isArray(offer.installments) ? (
                <CourseOptionCard
                  type="detailed"
                  {...offer}
                  installments={offer.installments.reduce((a, b) =>
                    a.months > b.months ? a : b
                  )}
                  onAction={() => handleOpenOffer(offer)}
                />
              ) : (
                <CourseOptionCard
                  type="info"
                  details={offer.details as string}
                  unit={offer.unit}
                  address={offer.address}
                  modality={offer.modality}
                  shift={offer.shift}
                  onAction={() => handleOpenOffer(offer)}
                />
              )}
            </Grid>
          ))}
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
