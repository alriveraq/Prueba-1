import { seccion } from "./seccion";
export interface alumno{
  rut: string;
  nombre: string;
  apellido: string;
  edad: number;
  seccion: seccion;
}
