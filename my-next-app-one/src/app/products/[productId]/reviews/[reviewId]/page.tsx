import React from "react";

const page = async ({
  params,
}: {
  params: Promise<{ productId: String; reviewId: String }>;
}) => {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Review Id : {reviewId} of Product Id: {productId}
    </h1>
  );
};

export default page;
