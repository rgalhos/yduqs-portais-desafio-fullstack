import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ECourseModality } from './enums/course-modality.enum';
import { ECourseShift } from './enums/course-shift.enum';
import { IInstallment } from './interfaces/installment.interface';

@Table({ tableName: 'offers' })
export class OfferModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({
    type: DataType.ENUM(...Object.keys(ECourseModality)),
    allowNull: false,
  })
  modality: ECourseModality;

  @Column({
    type: DataType.ENUM(...Object.keys(ECourseShift)),
    allowNull: true,
  })
  shift?: ECourseShift;

  @Column({ type: DataType.DECIMAL, allowNull: true })
  originalPrice?: number;

  @Column({ type: DataType.DECIMAL, allowNull: true })
  currentPrice?: number;

  @Column({ type: DataType.JSONB, allowNull: true })
  installments?: IInstallment[];

  @Column({ type: DataType.STRING, allowNull: true })
  details?: string;

  @Column({ type: DataType.STRING, allowNull: false })
  unit: string;

  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  active: boolean;
}
