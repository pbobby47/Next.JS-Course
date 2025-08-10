import React from "react";

const page = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;

  return <h1>Details of Product : {productId}</h1>;
};

export default page;
