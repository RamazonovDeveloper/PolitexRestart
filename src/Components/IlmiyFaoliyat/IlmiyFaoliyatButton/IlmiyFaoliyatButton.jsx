import { useEffect, useState } from "react";
import "./IlmiyFaoliyatButton.scss";

const IlmiyFaoliyatButton = ({
  buttonText = "",
  isTop = false,
  isOpen = false,
  setOpen,
}) => {
  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null;
      return width;
    }

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    });

    return windowDimensions;
  };

  const screenWidth = useWindowDimensions();

  const openList = (evt) => {
    if (
      !isTop ||
      (evt.target.className === "technology-stars__button__icon" &&
        screenWidth > 997)
    )
      return;

    setOpen(!isOpen);
  };

  return (
    <button
      className={`technology-stars__button ${
        isTop ? "technology-stars__button--top" : ""
      }`}
      onClick={openList}
    >
      {/* <div className="technology-stars__button__inner"> */}
      <span className="technology-stars__button__text">{buttonText}</span>

      <span className="technology-stars__button__icon">
        <svg width={20} height={26} viewBox="0 0 20 26">
          <path
            d="M.98 24h18.04a1 1 0 0 1 .18 1.98l-.18.02H.98a1 1 0 0 1-.18-1.98L.98 24ZM9.82.02 10 0a1 1 0 0 1 .98.82L11 1v17.58l5.37-5.36a1 1 0 0 1 1.28-.11l.14.11a1 1 0 0 1 .11 1.28l-.1.14-7.09 7.07a1 1 0 0 1-1.28.11l-.14-.11-7.08-7.07a1 1 0 1 1 1.28-1.54l.14.11L9 18.58V1a1 1 0 0 1 .82-.98L10 0Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {/* </div> */}
    </button>
  );
};

export default IlmiyFaoliyatButton;
