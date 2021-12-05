import { useSelector } from "react-redux";
import { ReactNode } from "react";

import { selectIsLoading } from "../../store/selectors/selectApp";
import LoadingModal from "./LoadingModal";

type ModalType = {
  children?: ReactNode;
};

export default function Modal({ children }: ModalType) {
  const loading = useSelector(selectIsLoading);

  return <>{loading ? <LoadingModal /> : children}</>;
}
