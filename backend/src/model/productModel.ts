import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Product")
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text")
  introduction: string;

  @Column()
  product_url: string;

  @Column({
    default: "http://graph.facebook.com/{user-id}/picture?type=large"
  })
  main_photo: string;
}