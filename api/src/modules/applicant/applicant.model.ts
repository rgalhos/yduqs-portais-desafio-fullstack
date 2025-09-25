import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { OfferModel } from '../offer/offer.model';

@Table({ tableName: 'applicants' })
export class ApplicantModel extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  fullName: string;

  @Column({ type: DataType.STRING(11), allowNull: false })
  cpf: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  birthDate: string;

  @Column({ type: DataType.STRING(14), allowNull: false })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { isEmail: true },
  })
  email: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  graduationYear: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  whatsappOptIn: boolean;

  @ForeignKey(() => OfferModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  offerId;

  @Column({ type: DataType.INTEGER, allowNull: true })
  noInstallments: number;

  @Column({ type: DataType.DECIMAL, allowNull: true })
  installmentValue: number;
}
