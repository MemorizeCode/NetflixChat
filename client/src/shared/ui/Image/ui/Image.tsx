import { FC } from "react";

export interface ImageProps {
  url: string;
  className?: string;
}
const Image: FC<ImageProps> = (props) => {
  const { url, className } = props;
  return <img src={url} className={className} />;
};

export default Image;
