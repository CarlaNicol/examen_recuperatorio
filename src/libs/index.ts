import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeClasses(...classValues: ClassValue[]) {
  return twMerge(clsx(classValues));
}
