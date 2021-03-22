import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("phim_pkey", ["id"], { unique: true })
@Entity("phim", { schema: "public" })
export class Phim {
  @PrimaryGeneratedColumn({ type: "integer", name: "ID" })
  id: number;

  @Column("character", { name: "TenPhim", nullable: true, length: 100 })
  tenPhim: string | null;

  @Column("character", { name: "Hinh", nullable: true, length: 100 })
  hinh: string | null;

  @Column("character", { name: "TrangThai", nullable: true, length: 50 })
  trangThai: string | null;

  @Column("integer", { name: "ThoiGian", nullable: true })
  thoiGian: number | null;

  @Column("character", { name: "Trailer", nullable: true, length: 20 })
  trailer: string | null;
}
