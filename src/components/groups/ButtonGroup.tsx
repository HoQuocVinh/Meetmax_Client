import { useDispatch, useSelector } from "react-redux";
import {
  toggleDraggbleImage,
  toggleFelling,
  toggleModal,
} from "~/sagas/modal/modal-slice";
import Button from "../button/Button";

const ButtonGroup = ({ isChildren }: { isChildren: boolean }) => {
  const { isShowModal, isShowFelling } = useSelector(
    (state: any) => state.modal
  );
  const dispatch = useDispatch();

  const handleButtonPhoto = () => {
    if (!isShowModal) {
      dispatch(toggleModal(true));
      dispatch(toggleDraggbleImage(true));
    } else dispatch(toggleDraggbleImage(true));
  };

  const handleButtonFelling = () => {
    dispatch(toggleModal(true));
    dispatch(toggleFelling(true));
  };

  return (
    <div className="flex items-center justify-between">
      <Button.Social
        image="./images/video.png"
        onClick={() => {}}
        tooltip="Live video"
      >
        {isChildren && "Live video"}
      </Button.Social>
      <Button.Social
        image="./images/image.png"
        onClick={handleButtonPhoto}
        tooltip="Photo/video"
      >
        {isChildren && "Photo/video"}
      </Button.Social>
      <Button.Social
        image="./images/felling.png"
        onClick={handleButtonFelling}
        tooltip="Felling/activity"
      >
        {isChildren && "Felling/activity"}
      </Button.Social>
    </div>
  );
};

export default ButtonGroup;
