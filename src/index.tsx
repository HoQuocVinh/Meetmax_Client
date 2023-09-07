import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

import App from "./App";
import "./css/index.scss";

import store from "./sagas/configureStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <HandlScroll>
        <App />
      </HandlScroll>
    </Router>
  </Provider>
);

function HandlScroll({ children }: { children: any }) {
  const { isShowModal } = useSelector((state: any) => state.modal);
  useEffect(() => {
    if (isShowModal) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.paddingRight = "8px";
    } else {
      document.body.style.removeProperty("padding-right");
      document.documentElement.style.removeProperty("overflow");
    }
  }, [isShowModal]);
  return <>{children}</>;
}
