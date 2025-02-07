import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity {
  @Column()
  category_name!: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products!: ProductEntity[];
}
