export interface DraggbleUploadImageProps {
  onClick?: () => void;
}

export interface ImageRowProps {
  image: string;
  height?: any;
}

export interface AvtProps {
  width?: string;
  height?: string;
  src: string;
  alt?: string | undefined;
}

export interface ImageItem {
  url: string;
  image: boolean;
}
