import { DataType } from "./Common";

export interface FlushReq {
  collection_names: string[];
}
export interface FieldData {
  type: DataType;
  field_name: string;
  dim?: number;
  data: Number[];
}

export interface InsertReq {
  collection_name: string;
  partition_name?: string;
  fields_data: { [x: string]: any }[];
  hash_keys?: Number[]; // user can generate hash value depend on primarykey value
}
