import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../../config";
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column({ length: 100 })
  name!: string;
  @Column()
  username!: string;
  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}
