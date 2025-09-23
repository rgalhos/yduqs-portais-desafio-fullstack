export interface IInstallment {
  months: number;
  value: number;
}

export interface ICourseOption {
  originalPrice: number;
  currentPrice: number;
  installments: IInstallment[];
  modality: string;
  shift?: string;
  location: {
    unit: string;
    address?: string;
  };
}
