import { TbPhotoPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { DraggbleUploadImageProps } from "~/interface/ImageInterface";
import { addImages } from "~/sagas/modal/modal-slice";

const DraggbleUploadZone: React.FC<DraggbleUploadImageProps> = ({
  onClick,
}) => {
  const dispatch = useDispatch();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files && files.length > 0) {
      const newImages: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageUrl = URL.createObjectURL(file);
        newImages.push(imageUrl);
      }
      dispatch(addImages(newImages));
    }
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="items-centner m-2.5 flex h-52 cursor-pointer flex-col items-center justify-center rounded-md bg-[#F7F8FA] transition-all hover:bg-gray-100"
      onClick={onClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="relative flex items-center justify-center rounded-full bg-[#D8DADF] p-2">
        <TbPhotoPlus className="h-7 w-7 text-black text-opacity-80" />
      </div>
      <p className="mt-1">Add photo/videos</p>
      <p className="text-sm text-ct-gray text-opacity-70">or drag and drop</p>
    </div>
  );
};
export default DraggbleUploadZone;
