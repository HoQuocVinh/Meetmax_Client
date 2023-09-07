import { useDispatch, useSelector } from "react-redux";
import Button from "~/components/button/Button";
import { toggleFelling } from "~/sagas/modal/modal-slice";
import classNames from "~/utils/classNames";
import FellingIconGroup from "./FellingIconGroup";

const FellingModal = () => {
  const dispatch = useDispatch();
  const { isShowFelling } = useSelector((state: any) => state.modal);

  return (
    <div className={classNames("felling", isShowFelling && "felling__animate")}>
      <div className="relative pb-3 pt-4">
        <h1 className="text-center text-xl font-bold">How are you feeling?</h1>
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <Button.Back onClick={() => dispatch(toggleFelling(false))} />
        </div>
      </div>
      <hr className="border-[0.5px] border-gray-200 " />
      <FellingIconGroup />
    </div>
  );
};

export default FellingModal;
