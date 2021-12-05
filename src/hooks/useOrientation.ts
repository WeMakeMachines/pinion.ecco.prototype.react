import { useEffect, useState } from "react";

enum OrientationType {
  LANDSCAPE_PRIMARY = "landscape-primary",
  LANDSCAPE_SECONDARY = "landscape-secondary",
  PORTRAIT_PRIMARY = "portrait-primary",
  PORTRAIT_SECONDARY = "portrait-secondary",
}

export enum Orientation {
  LANDSCAPE = "landscape",
  PORTRAIT = "portrait",
}

export function useOrientation(): Orientation {
  const getOrientation = () => {
    if (typeof window === "undefined") {
      return Orientation.PORTRAIT;
    }

    const type = window.screen.orientation.type;
    switch (type) {
      case OrientationType.LANDSCAPE_PRIMARY:
      case OrientationType.LANDSCAPE_SECONDARY:
        return Orientation.LANDSCAPE;
      case OrientationType.PORTRAIT_PRIMARY:
      case OrientationType.PORTRAIT_SECONDARY:
      default:
        return Orientation.PORTRAIT;
    }
  };

  const [orientation, setOrientation] = useState(getOrientation);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("orientationchange", () => {
      setOrientation(getOrientation());
    });
    // window.screen.orientation.addEventListener("change", () => {
    //   setOrientation(window.screen.orientation.type);
    // });
  }, []);

  return orientation;
}
