import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`yahweeh_trust/public/img/svg/${src}`} alt={src} width={width} height={height} />
);
