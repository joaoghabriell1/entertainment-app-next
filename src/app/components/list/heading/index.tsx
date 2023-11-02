import React from "react";

type Props = {
  content: string;
};

const ListHeading = ({ content }: Props) => {
  return <h2 className="text-white text-2xl mb-2">{content}</h2>;
};

export default ListHeading;
