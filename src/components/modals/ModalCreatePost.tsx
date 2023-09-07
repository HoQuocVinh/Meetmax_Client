import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useSelector } from "react-redux";

import { PostContext } from "~/context/PostProvider";
import { CreatePostProps } from "~/interface/ModalInterface";
import StatusMedia from "~/modules/status/StatusMedia";
import classNames from "~/utils/classNames";
import Overlay from "../common/Overlay";
import Wrapper from "../wrapper/Wrapper";
import FellingModal from "~/modules/status/FellingModal";

const ModalCreatePost = React.forwardRef((props: CreatePostProps, ref: any) => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      visibility: "Friends",
      thinking: "",
    },
  });

  const { isShowModal, isShowFelling } = useSelector(
    (state: any) => state.modal
  );

  const { content } = useContext(PostContext);

  const onSubmit: SubmitHandler<FieldValues> = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    const handleChangeStatus = () => {
      props.onChangeStatus(content);
    };
    !isShowModal && handleChangeStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowModal]);

  return ReactDOM.createPortal(
    <Wrapper.ModalPost show={isShowModal}>
      <Overlay.Modal />
      <div
        className={classNames(
          "box__modal shadow-lg lg:w-1/3 2xl:w-[27%]",
          isShowFelling && "h-2/3"
        )}
      >
        <div className="relative h-full transition-all">
          <StatusMedia control={control} ref={ref} />
          <FellingModal />
        </div>
      </div>
    </Wrapper.ModalPost>,
    document.querySelector("body")!
  );
});

export default ModalCreatePost;
