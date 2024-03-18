import React from "react";
import styles from "./ImageReload.module.css";

const ImageReload = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    target.style.opacity = 1;
    setSkeleton(!skeleton);
  };
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        className={styles.img}
        src=""
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default ImageReload;
