import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../config";
import { CategoryEntity } from "../../categorie/entities/category.entity";
import { PurchasesProductsEntity } from "../../purchases/entities/purchases-products.entity";

@Entity({ name: "product" })
export class ProductEntity extends BaseEntity {
  @Column({
    type: "varchar",
    length: 250,
  })
  product_name!: string;

  @Column({
    type: "varchar",
    length: 100,
  })
  descripcion!: string;

  @Column({
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  price!: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category!: CategoryEntity;

  @OneToMany(
    () => PurchasesProductsEntity,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct!: PurchasesProductsEntity[];
}
