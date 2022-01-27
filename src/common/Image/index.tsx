import { ImgIconProps } from "../types";

export const ImgIcon = ({ src, width, height }: ImgIconProps) => (
  <img src={`/img/icons/${src}`} alt={src} width={width} height={height} />
);
