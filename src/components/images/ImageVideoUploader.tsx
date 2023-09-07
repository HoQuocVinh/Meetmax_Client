import { ChangeEvent, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageItem } from "~/interface/ImageInterface";
import { addImages } from "~/sagas/modal/modal-slice";

const ImageVideoUploader = forwardRef((props: any, ref: any) => {
  const { images } = useSelector((state: any) => state.modal);
  console.log("TCL: UploadImage -> images", images);
  const dispatch = useDispatch();

  const handlePreviewImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newImages: ImageItem[] = [];
    let checkType = false;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        file.type.substring(0, file.type.indexOf("/")) === "image"
          ? (checkType = true)
          : (checkType = false);
        const imageUrl = URL.createObjectURL(file);
        newImages.push({ url: imageUrl, image: checkType });
      }
      dispatch(addImages(newImages));
    }
  };

  return (
    <input
      ref={ref}
      type="file"
      accept="image/*, video/*"
      id="file_upload"
      multiple
      onChange={handlePreviewImage}
      className="hidden"
    />
  );
});

export default ImageVideoUploader;
