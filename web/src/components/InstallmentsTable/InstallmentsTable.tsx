import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { formatCurrency } from "@/lib/utils/currency.util";
import { IInstallment } from "@/shared/interfaces/offer.interface";

export interface IInstallmentsTableProps {
  installments: IInstallment[];
}

export const InstallmentsTable = ({
  installments,
}: IInstallmentsTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Parcelas</TableCell>
            <TableCell align="left" width={110}>
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody component={RadioGroup} name="installments-radio-group">
          {installments.map((item, i) => (
            <TableRow key={i}>
              <TableCell>
                <FormControlLabel
                  control={<Radio color="default" />}
                  value={item.months}
                  label={`${item.months}x ${formatCurrency(item.value)}`}
                />
              </TableCell>
              <TableCell align="left" width={110}>
                <Typography color="rgba(18, 18, 18, 1)" lineHeight="171%">
                  {formatCurrency(+(item.months * item.value).toFixed(2))}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
