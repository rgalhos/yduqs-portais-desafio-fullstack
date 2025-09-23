"use client";

import { Box, Icon, Stack, styled, SvgIcon, Typography } from "@mui/material";

export type ICourseOptionCardProps = {
  type: "detailed" | "info";
  title: string | React.ReactNode;
  location?: {
    unit: string;
    address?: string;
  };
  // onAction: () => void;
} & (
  | { type: "info"; info: string }
  | ({
      type: "detailed";
    } & ICourseOptionCardBodyDetailedProps)
);

export interface ICourseOptionCardBodyDetailedProps {
  price: string;
  fullPrice: string;
  installmentPrice: string;
  noInstallments: number;
}

const CourseOptionCardWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "380px",
  width: "100%",
}));

const CourseOptionCardHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 4),
  width: "100%",
  borderWidth: "1px 1px 0 1px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "8px 8px 0 0",
}));

const CourseOptionCardContent = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1),
}));

const CourseOptionCardFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  borderWidth: "0 1px 1px 1px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "0 0 8px 8px",
}));

const CourseOptionCardBodyDetailed = (
  props: ICourseOptionCardBodyDetailedProps
) => (
  <CourseOptionCardContent>
    {props.fullPrice && (
      <Typography variant="body1" fontWeight={500} lineHeight="115%">
        De <s>{props.fullPrice}</s> por até
      </Typography>
    )}

    <div>
      {props.noInstallments && (
        <Typography display="inline" fontWeight={500} fontSize={16}>
          {props.noInstallments}x
        </Typography>
      )}
      <Typography display="inline" fontWeight={600} fontSize={40}>
        {props.installmentPrice}
      </Typography>
    </div>

    {props.price && (
      <Typography variant="body2">à vista {props.price}</Typography>
    )}
  </CourseOptionCardContent>
);

export const CourseOptionCard = (props: ICourseOptionCardProps) => {
  return (
    <CourseOptionCardWrapper>
      <CourseOptionCardHeader>
        <Typography
          variant="body1"
          fontWeight={500}
          lineHeight="135%"
          component={Stack}
          flexDirection="row"
          alignItems="center"
          gap={2}
          divider={
            <SvgIcon sx={{ width: "16px", height: "16px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.666748V15.3334"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </SvgIcon>
          }
        >
          {props.title}
        </Typography>
      </CourseOptionCardHeader>

      {props.type === "detailed" && (
        <CourseOptionCardBodyDetailed
          price={props.price}
          fullPrice={props.fullPrice}
          noInstallments={props.noInstallments}
          installmentPrice={props.installmentPrice}
        />
      )}

      {props.type === "info" && <>todo</>}

      {props.location && (
        <CourseOptionCardFooter>
          <Typography
            variant="body2"
            fontWeight={500}
            textTransform="uppercase"
          >
            Campinas - Vila Industrial
          </Typography>
          {props.location.address && (
            <Typography
              variant="body2"
              lineHeight="115%"
              textTransform="uppercase"
            >
              Rua Dr. Sales de Oliveira, No 1661 - Vila industrial - Campinas
            </Typography>
          )}
        </CourseOptionCardFooter>
      )}
    </CourseOptionCardWrapper>
  );
};
