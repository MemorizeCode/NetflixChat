import { FC, lazy } from "react";
import { ImageProps } from "./Image";

export const Image = lazy<FC<ImageProps>>(() =>import("./Image"))