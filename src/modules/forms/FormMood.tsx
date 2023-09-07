import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonGroup from "~/components/groups/ButtonGroup";
import Images from "~/components/images/Images";
import ModalCreatePost from "~/components/modals/ModalCreatePost";
import Wrapper from "~/components/wrapper/Wrapper";
import { PostProvider } from "~/context/PostProvider";

import { toggleModal } from "~/sagas/modal/modal-slice";

import classNames from "~/utils/classNames";

const FormMood = () => {
  const { isShowModal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const modalRef = useRef<any>();
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [content, setContent] = useState<string>("");

  const handleChangeStatus = (values: any) => {
    setContent(values);
  };

  useEffect(() => {
    if (isShowModal) {
      //* Tạo biến selection để lấy vùng chọn hiện tại trên trang web
      const selection = window.getSelection();
      //* Tạo phạm vi range
      const range = document.createRange();
      //* Phạm vi của range bao gồm nội dung hiện tại của modalRef.current
      range.selectNodeContents(modalRef.current);
      //* Đưa con trỏ về cuối modalRef.current
      range.collapse(false);
      //* Loại bỏ tất cả các vùng chọn
      selection?.removeAllRanges();
      //* Thêm phạm vi vừa tạo vào trong selection giúp con trỏ đến cuối modalRef.curent
      selection?.addRange(range);
    }
    return;
  }, [isShowModal]);

  return (
    <PostProvider>
      <ModalCreatePost
        ref={modalRef}
        open={isShowModal}
        onChangeStatus={handleChangeStatus}
        refStatus={statusRef}
      />
      <Wrapper.Form>
        <div className="flex items-center">
          <Images.Avt
            src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="avt"
          />
          <div
            className="ml-[10px] flex-1 cursor-pointer rounded-full bg-ct-gray bg-opacity-5 p-3 text-sm font-normal transition-all hover:bg-opacity-10"
            onClick={() => dispatch(toggleModal(!isShowModal))}
          >
            <p
              className={classNames(
                "texy-black overflow-hidden text-ellipsis break-all text-base font-medium leading-none text-black",
                content ? "text-opacity-80" : "text-opacity-50"
              )}
              ref={statusRef}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {content ? content : "What's happening?"}
            </p>
          </div>
        </div>
        <hr className="mt-3 border-spacing-0.5 border-gray-200" />
        <div className="mt-3">
          <ButtonGroup isChildren />
        </div>
      </Wrapper.Form>
    </PostProvider>
  );
};

export default FormMood;
