import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { removeToast, stopDelayAppearance } from "@store/toasts/toastsSlice";
import { TToast } from "@types";

import styles from "./styles.module.css";
const { toastItem } = styles;

const ToastItem = ({
  id,
  title,
  message,
  type,
  delayAppearance,
  onCloseToast,
}: TToast) => {
  const dispatch = useAppDispatch();
  const [progressBarIndicator, setProgressBarIndicator] = useState(0);
  const [pauseProgressBarIndicator, setPauseProgressBarIndicator] =
    useState(false);

  const progressBarScale = 100;
  const duration = 4000;
  const intervalTime = duration / 100;

  const closeToastHandler = useCallback(() => {
    dispatch(removeToast(id));
    onCloseToast?.();
  }, [dispatch, id, onCloseToast]);

  const pauseProgressBarIndicatorHandler = () => {
    setPauseProgressBarIndicator((prevState) => !prevState);
  };

  // progress bar calculate
  useEffect(() => {
    if (delayAppearance) return;

    const timerId = setInterval(() => {
      setProgressBarIndicator((prevState) => {
        if (prevState < progressBarScale && !pauseProgressBarIndicator) {
          return prevState + 1;
        }
        return prevState;
      });
    }, intervalTime);

    return () => clearInterval(timerId);
  }, [intervalTime, delayAppearance, pauseProgressBarIndicator]);

  //close toast when progress bar 100%
  useEffect(() => {
    if (progressBarIndicator === 100) {
      closeToastHandler();
    }
  }, [progressBarIndicator, closeToastHandler]);

  // delay appearance handler
  useEffect(() => {
    if (delayAppearance) {
      const timerId = setTimeout(() => {
        dispatch(stopDelayAppearance(id));
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [delayAppearance, dispatch, id]);

  // if delay with true return nothing
  if (delayAppearance) return "";

  return (
    <div
      className={`alert alert-${type} ${toastItem}`}
      onMouseEnter={pauseProgressBarIndicatorHandler}
      onMouseLeave={pauseProgressBarIndicatorHandler}
    >
      <h5>{title ? title : type}</h5>
      <p>{message}</p>
      <button className="btn-close" onClick={closeToastHandler}></button>
      <span
        className="placeholder"
        style={{
          width: `${progressBarIndicator}%`,
          transition: `width ${intervalTime}ms liner`,
        }}
      ></span>
    </div>
  );
};

export default ToastItem;
