import { Column, Model, Table } from 'sequelize-typescript';

export interface UserAttributes {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
}

@Table
export class User extends Model implements UserAttributes {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
