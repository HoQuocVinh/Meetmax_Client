import React, { useContext, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { Controller } from "react-hook-form";
import { RiPencilFill } from "react-icons/ri";
import { TbPhotoPlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import Button from "~/components/button/Button";
import Overlay from "~/components/common/Overlay";
import ButtonGroup from "~/components/groups/ButtonGroup";
import DisplayPermissionGroup from "~/components/groups/DisplayPermissionGroup";
import DraggbleUploadZone from "~/components/images/DraggbleUploadZone";
import MediaGallery from "~/components/images/MediaGallery";
import Images from "~/components/images/Images";
import ImageVideoUploader from "~/components/images/ImageVideoUploader";
import { PostContext } from "~/context/PostProvider";
import { StatusMediaProps } from "~/interface/ModalInterface";

import {
  clearImages,
  toggleDraggbleImage,
  toggleModal,
} from "~/sagas/modal/modal-slice";

const StatusMedia = React.forwardRef((props: StatusMediaProps, ref: any) => {
  const dispatch = useDispatch();
  const { images, isShowDraggble } = useSelector((state: any) => state.modal);
  console.log("TCL: images", images);
  const { setContent } = useContext(PostContext);

  const nodeRef = useRef<HTMLDivElement>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const handleUploadImg = () => {
    fileUploadRef.current?.click(); // Kích hoạt sự kiện click trên phần tử input
  };

  const handleDraggbleImage = () => {
    !images.length && dispatch(toggleDraggbleImage(true));
  };

  const handleCloseImage = () => {
    dispatch(toggleDraggbleImage(false));
    dispatch(clearImages());
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-[18px]">
        <p className="font-bold text-ct-gray">Create a post</p>
        <div className="flex items-center">
          <span className="text-sm text-ct-gray">Visibale for</span>
          <DisplayPermissionGroup control={props.control} />
          <Button.Close onClick={() => dispatch(toggleModal(false))} />
        </div>
      </div>
      <hr className="border-gray border-opacity-20" />
      <div className="flex items-center gap-3 px-5 py-3">
        <Images.Avt
          alt=""
          src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
        />
        <span>Quốc Vinh</span>
      </div>
      <div className="gap-[14px] overflow-auto break-all px-5 lg:max-h-[280px] 2xl:max-h-[400px]">
        <div ref={nodeRef} className="transition">
          <Controller
            control={props.control}
            name="thinking"
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <ContentEditable
                innerRef={ref}
                html={value}
                placeholder="What's on your mind?" // Placeholder của phần tử
                onBlur={onBlur}
                onChange={(e) => {
                  onChange(e.target.value);
                  setContent(e.target.value);
                }}
                className="pb-5 text-black text-opacity-70 outline-none"
              />
            )}
          />
          {isShowDraggble && (
            <div className="wrapper__image relative rounded-md border border-gray-200">
              <div className="absolute right-5 top-5 z-10">
                <Button.Close onClick={handleCloseImage} type="outline" />
              </div>
              {!images.length ? (
                <DraggbleUploadZone onClick={handleUploadImg} />
              ) : (
                <>
                  <Overlay.StatusMedia></Overlay.StatusMedia>
                  <div className="wrapper__button absolute inset-2.5">
                    <div className="ml-3 mt-3 flex gap-3">
                      <Button.Image
                        icon={<RiPencilFill />}
                        onClick={handleDraggbleImage}
                      >
                        Edit All
                      </Button.Image>
                      <Button.Image
                        icon={<TbPhotoPlus />}
                        onClick={handleUploadImg}
                      >
                        Add Photos/Videos
                      </Button.Image>
                    </div>
                  </div>
                  <MediaGallery />
                </>
              )}
            </div>
          )}
          <ImageVideoUploader ref={fileUploadRef} />
        </div>
      </div>
      <div className="flex items-center justify-between p-5">
        <div className="flex w-full items-center justify-between rounded-md border border-gray-300 p-1 px-5 py-2">
          <div className="flex-1 text-sm text-opacity-80">Add to your post</div>
          <ButtonGroup isChildren={false} />
        </div>
      </div>
      <div className="px-5 pb-5">
        <Button.Default
          variant="normal"
          btnBackground="blue"
          className="w-full rounded-lg px-8 py-3"
        >
          Post
        </Button.Default>
      </div>
    </div>
  );
});

export default StatusMedia;
