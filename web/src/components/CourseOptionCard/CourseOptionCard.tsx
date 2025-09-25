"use client";

import Image from "next/image";
import { Box, Button, Stack, styled, SvgIcon, Typography } from "@mui/material";
import { IInstallment } from "@/shared/interfaces/offer.interface";
import { formatCurrency } from "@/lib/utils/currency.util";
import { ECourseModality } from "@/shared/enums/course-modality.enum";
import { ECourseShift } from "@/shared/enums/course-shift.enum";
import {
  translateModality,
  translateShift,
} from "@/lib/utils/enum-translation.util";
import InfoIcon from "@public/info.svg";

export type IOfferCardProps = {
  type: "detailed" | "info";
  modality: ECourseModality;
  shift?: ECourseShift;
  unit: string;
  address: string;
  onAction?: () => void;
} & (
  | { type: "info"; details: string }
  | ({
      type: "detailed";
    } & IOfferCardBodyDetailedProps)
);

export interface IOfferCardBodyDetailedProps {
  originalPrice?: number;
  currentPrice: number;
  installments: IInstallment;
}

const CourseOptionCardWrapper = styled(Box)({
  maxWidth: "100%",
  minWidth: "250px",
});

const CourseOptionCardHeader = ({
  labelItems,
}: {
  labelItems: Array<string | undefined>;
}) => (
  <Box
    sx={(theme) => ({
      background: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2, 4),
      width: "100%",
      borderWidth: "1px 1px 0 1px",
      borderStyle: "solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "8px 8px 0 0",
    })}
  >
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SvgIcon>
      }
    >
      {labelItems.map((item, i) => item && <span key={i}>{item}</span>)}
    </Typography>
  </Box>
);

const CourseOptionCardContent = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1),
}));

const CourseOptionCardFooter = ({
  unit,
  address,
}: {
  unit: string;
  address?: string;
}) => (
  <Box
    sx={(theme) => ({
      padding: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1),
      borderWidth: "0 1px 1px 1px",
      borderStyle: "solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "0 0 8px 8px",
    })}
  >
    <Typography variant="body2" fontWeight={500} textTransform="uppercase">
      {unit}
    </Typography>

    {address && (
      <Typography variant="body2" lineHeight="115%" textTransform="uppercase">
        {address}
      </Typography>
    )}
  </Box>
);

const CourseOptionCardBodyDetailed = (props: IOfferCardBodyDetailedProps) => (
  <CourseOptionCardContent>
    {props.originalPrice && (
      <Typography variant="body1" fontWeight={500} lineHeight="115%">
        De <s>{formatCurrency(props.originalPrice)}</s> por até
      </Typography>
    )}

    <div>
      <Typography display="inline" fontWeight={500} fontSize={16}>
        {props.installments.months}x
      </Typography>
      <Typography display="inline" fontWeight={600} fontSize={40}>
        {formatCurrency(props.installments.value)}
      </Typography>
    </div>

    {props.currentPrice && (
      <Typography variant="body2">
        à vista {formatCurrency(props.currentPrice)}
      </Typography>
    )}
  </CourseOptionCardContent>
);

const CourseOptionCardBodyInfo = ({ info }: { info: string }) => (
  <CourseOptionCardContent sx={{ gap: 2 }}>
    <Image src={InfoIcon} alt="" />
    <Typography variant="body2">{info}</Typography>
  </CourseOptionCardContent>
);

export const CourseOptionCard = (props: IOfferCardProps) => (
  <CourseOptionCardWrapper>
    <CourseOptionCardHeader
      labelItems={[
        translateModality(props.modality),
        props.shift && translateShift(props.shift),
      ]}
    />

    {props.type === "detailed" && (
      <CourseOptionCardBodyDetailed
        currentPrice={props.currentPrice}
        originalPrice={props.originalPrice}
        installments={props.installments}
      />
    )}

    {props.type === "info" && <CourseOptionCardBodyInfo info={props.details} />}

    {props.onAction && (
      <CourseOptionCardContent sx={{ pt: 0, pb: 4 }}>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          onClick={props.onAction}
        >
          Avançar
        </Button>
      </CourseOptionCardContent>
    )}

    <CourseOptionCardFooter unit={props.unit} address={props.address} />
  </CourseOptionCardWrapper>
);
