import { ECourseModality } from "../enums/course-modality.enum";
import { ECourseShift } from "../enums/course-shift.enum";

export interface IInstallment {
  months: number;
  value: number;
}

export interface IOffer {
  originalPrice: number;
  currentPrice: number;
  installments: IInstallment[];
  modality: ECourseModality;
  shift?: ECourseShift;
  unit: string;
  address: string;
  details?: string;
  active: boolean;
}
