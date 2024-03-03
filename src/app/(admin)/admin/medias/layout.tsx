import React from "react";

type Props = {
  children: React.ReactNode;
  mediaModal: React.ReactNode;
};

function layout({ mediaModal, children }: Props) {
  return (
    <>
      {children}
      {mediaModal}
    </>
  );
}

export default layout;
