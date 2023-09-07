import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageItem, ImageRowProps } from "~/interface/ImageInterface";
import classNames from "~/utils/classNames";

type VideoProps = {
  src: string;
  height?: string;
};

export const ImageRow: React.FC<ImageRowProps> = ({ image, height }) => {
  return (
    <div className={classNames("w-full", height ? height : "h-full")}>
      <img
        src={image}
        alt=""
        // className={classNames(
        //   "w-full object-cover object-center",
        //   height ? height : "h-full"
        // )}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export const Video: React.FC<VideoProps> = ({ src, height }) => {
  return (
    <video className="h-[230px] w-full" controls>
      <source src={src} type="video/mp4" />
      <source src={src} type="vvideo/webm" />
      <source src={src} type="video/ogg" />
    </video>
  );
};

const gridColumnMapping: { [key: number]: string } = {
  1: "h-[600px]",
  2: "h-[230px] grid-cols-2",
  3: "h-[460px] grid-cols-3",
  4: "h-[460px] grid-cols-3",
};

const gridRowMapping: { [key: number]: string } = {
  1: "h-[300px]",
  2: "h-[460px] grid-rows-2",
  3: "h-[460px] grid-rows-3",
  4: "h-[460px] grid-rows-3",
};

const calculateColumn = (imagesLength: number) => {
  if (imagesLength >= 5) return "h-[460px] grid-cols-2";
  return gridColumnMapping[imagesLength] || "";
};

const calculateRow = (imagesLenght: number) => {
  return gridRowMapping[imagesLenght];
};

const WrapperGallery = ({
  children,
  images,
  checkSizeImage,
}: {
  children: ReactNode;
  images: ImageItem[];
  checkSizeImage: boolean;
}) => {
  return (
    <div
      className={classNames(
        "m-2.5 flex  gap-0.5 overflow-hidden rounded-[10px]",
        checkSizeImage ? "max-h-[400px] flex-row" : "max-h-[440px] flex-col"
      )}
    >
      {children}
    </div>
  );
};

const DisplayVertically = ({
  images,
  checkSizeImage,
}: {
  images: ImageItem[];
  checkSizeImage: boolean;
}) => {
  return (
    <WrapperGallery checkSizeImage={checkSizeImage} images={images}>
      {images.length < 5 && (
        <div
          className={classNames(
            images.length === 2 && "flex-1",
            images.length > 2 && images.length < 5 && "basis-2/3"
          )}
        >
          <ImageRow image={images[0].url} />
        </div>
      )}
      {images.length === 2 && (
        <div className="flex-1">
          <ImageRow image={images[1].url} />
        </div>
      )}
      {(images.length === 3 || images.length === 4) && (
        <div className="flex flex-1 flex-col gap-y-0.5">
          {images.slice(1, 5).map((item: any, index: number) => (
            <div
              className={classNames(
                images.length === 3 && "h-1/2",
                images.length === 4 && "h-1/3"
              )}
            >
              <ImageRow key={index} image={item.url} />
            </div>
          ))}
        </div>
      )}
      {images.length >= 5 && (
        <Fragment>
          <div className="flex flex-1 flex-col gap-y-0.5">
            {images.slice(0, 2).map((item: any, index: number) => (
              <div className="h-1/2">
                <ImageRow key={index} image={item.url} />
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-y-0.5">
            {images.slice(2, 4).map((item: any, index: number) => (
              <div className="h-1/3">
                <ImageRow key={index} image={item.url} />
              </div>
            ))}
            <div className="relative h-1/3">
              <ImageRow image={images[4]?.url}></ImageRow>
              {images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                  <span className="text-3xl text-white before:mr-1 before:content-['+']">
                    {images.length - 4}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </WrapperGallery>
  );
};

const DisplayHorizontally = ({
  images,
  checkSizeImage,
}: {
  images: ImageItem[];
  checkSizeImage: boolean;
}) => {
  return (
    <WrapperGallery checkSizeImage={checkSizeImage} images={images}>
      {images.length < 5 && (
        <div className={classNames(images.length === 2 && "h-1/3")}>
          <ImageRow image={images[0].url} />
        </div>
      )}
      {images.length === 2 && (
        <div className="h-1/2">
          <ImageRow image={images[1].url} />
        </div>
      )}
    </WrapperGallery>
  );
};

const MediaGallery = () => {
  const [checkSizeImg, setCheckSizeImg] = useState<boolean>(false);
  const { images } = useSelector((state: any) => state.modal);

  useEffect(() => {
    const image = new Image() as HTMLImageElement;
    image.src = images[0]?.url;
    image.onload = function () {
      setCheckSizeImg(image.height > image.width);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {checkSizeImg ? (
        <DisplayVertically checkSizeImage={checkSizeImg} images={images} />
      ) : (
        <DisplayHorizontally checkSizeImage={checkSizeImg} images={images} />
      )}
    </div>
  );
};

// const Gallery = () => {
//   const [checkSizeImg, setCheckSizeImg] = useState<boolean>(false);
//   const { images } = useSelector((state: any) => state.modal);

//   useEffect(() => {
//     const image = new Image() as HTMLImageElement;
//     image.src = images[0]?.url;
//     image.onload = function () {
//       setCheckSizeImg(image.height > image.width);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//       {checkSizeImg ? (
//         <div
//           className={classNames(
//             "m-2.5 grid gap-0.5 overflow-hidden rounded-[10px]",
//             calculateColumn(images.length)
//           )}
//         >
//           {(images.length === 1 || images.length === 2) &&
//             images.map((image: any, index: number) =>
//               !image.image ? (
//                 <Video key={index} src={image.url}></Video>
//               ) : (
//                 <ImageRow
//                   key={index}
//                   image={image.url}
//                   height={image.length === 2 && "h-[230px]"}
//                 ></ImageRow>
//               )
//             )}
//           {(images.length === 3 || images.length === 4) && (
//             <>
//               <div className="col-span-2">
//                 {images[0].url ? (
//                   <ImageRow image={images[0].url}></ImageRow>
//                 ) : (
//                   <Video src={images[0].url}></Video>
//                 )}
//                 <ImageRow image={images[0].url} />
//               </div>
//               <div
//                 className={classNames(
//                   "grid gap-0.5",
//                   images.length === 3 && "grid-rows-2",
//                   images.length === 4 && "grid-rows-3"
//                 )}
//               >
//                 {images.slice(1, 4).map(
//                   (item: any, index: number) =>
//                     item.image ? (
//                       <ImageRow
//                         key={index}
//                         image={item.url}
//                         height={
//                           images.length === 3
//                             ? "h-[230px]"
//                             : "h-[calc(460px/3)]"
//                         }
//                       ></ImageRow>
//                     ) : (
//                       <Video key={index} src={item.url}></Video>
//                     )
//                   // <Video src={item.url}></Video>;
//                 )}
//                 {/* {images.slice(1, 4).map((item: any, index: number) => (
//                   <ImageRow
//                     key={index}
//                     image={item.url}
//                     height={
//                       images.length === 3 ? "h-[230px]" : "h-[calc(460px/3)]"
//                     }
//                   />
//                 ))} */}
//               </div>
//             </>
//           )}
//           {images.length >= 5 && (
//             <>
//               <div className="grid grid-rows-2 gap-y-0.5">
//                 {images.slice(0, 2).map((item: any, index: number) => (
//                   <ImageRow key={index} image={item} height="h-[230px]" />
//                 ))}
//               </div>
//               <div className="grid grid-rows-3 gap-y-0.5">
//                 {images.slice(2, 4).map((item: any, index: number) => (
//                   <ImageRow
//                     key={index}
//                     image={item}
//                     height="h-[calc(460px/3)]"
//                   />
//                 ))}
//                 <div className="relative">
//                   {images.length >= 5 && (
//                     <ImageRow image={images[4]} height="h-[calc(460px/3)]" />
//                   )}
//                   <div
//                     className={classNames(
//                       "absolute inset-0 flex items-center justify-center bg-black bg-opacity-20",
//                       images.length > 5 ? "block" : "hidden"
//                     )}
//                   >
//                     <span className="text-4xl font-medium text-white before:mr-1 before:content-['+']">
//                       {images.length - 4}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       ) : (
//         <div
//           className={classNames(
//             "m-2.5 grid gap-0.5 overflow-hidden rounded-[10px]",
//             calculateRow(images.length)
//           )}
//         >
//           {images.slice(0, 2).map((item: any, index: number) => (
//             <ImageRow
//               image={item}
//               key={index}
//               height={images.length > 1 && "h-[230px]"}
//             />
//           ))}
//           {(images.length === 3 || images.length === 4) && (
//             <>
//               <div className="row-span-2">
//                 <ImageRow image={images[0]} height="h-[calc(460px/3*2)]" />
//               </div>
//               <div
//                 className={classNames(
//                   "grid gap-x-0.5",
//                   images.length === 3 && "grid-cols-2",
//                   images.length === 4 && "grid-cols-3"
//                 )}
//               >
//                 {images.slice(1, 4).map((item: any, index: number) => (
//                   <ImageRow
//                     key={index}
//                     image={item}
//                     height="h-[calc(460px/3)]"
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//           {images.length >= 5 && (
//             <>
//               <div className="row-span-2 grid grid-cols-2 gap-x-0.5">
//                 {images.slice(0, 2).map((item: any, index: number) => (
//                   <ImageRow key={index} image={item} height="h-[240px]" />
//                 ))}
//               </div>
//               <div className="grid grid-cols-3 gap-x-0.5">
//                 {images.slice(2, 4).map((item: any, index: number) => (
//                   <ImageRow image={item} height="h-[120px]" />
//                 ))}
//                 <div className="relative">
//                   {images.length >= 5 && (
//                     <ImageRow image={images[4]} height="h-[120px]" />
//                   )}
//                   <div
//                     className={classNames(
//                       "absolute inset-0 flex items-center justify-center bg-black bg-opacity-20",
//                       images.length > 5 ? "block" : "hidden"
//                     )}
//                   >
//                     <span className="font-meidum text-3xl text-white before:mr-1 before:content-['+']">
//                       {images.length - 4}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

export default MediaGallery;
