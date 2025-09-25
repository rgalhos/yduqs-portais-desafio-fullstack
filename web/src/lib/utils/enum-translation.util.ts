import { ECourseModality } from "@/shared/enums/course-modality.enum";
import { ECourseShift } from "@/shared/enums/course-shift.enum";

export function translateModality(modality: ECourseModality) {
  const t: { [key in ECourseModality]: string } = {
    [ECourseModality.PRESENCIAL]: "Presencial",
    [ECourseModality.EAD]: "Digital (EaD)",
    [ECourseModality.SEMIPRESENCIAL]: "Híbrido",
  };

  return t[modality];
}

export function translateShift(shift: ECourseShift) {
  const t: { [key in ECourseShift]: string } = {
    [ECourseShift.MORNING]: "Manhã",
    [ECourseShift.AFTERNOON]: "Vespertino",
    [ECourseShift.EVENING]: "Noturno",
    [ECourseShift.FULL_TIME]: "Integral",
  };

  return t[shift];
}
