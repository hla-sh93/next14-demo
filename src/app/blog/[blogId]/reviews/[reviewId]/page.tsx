import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    blogId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      review {params.reviewId} for product {params.blogId}
    </h1>
  );
}
