import { Metadata } from "next";
import Link from "next/link";

export const metada: Metadata = {
  title: "Blog Page",
};
export default function BlogList() {
  const blogId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Blog Page</h1>
      <h2>
        <Link href="/">Blog 1</Link>
      </h2>
      <h2>
        <Link href="/" replace>
          Blog 2{" "}
        </Link>
      </h2>
      <h2>
        <Link href={`blog/${blogId}`}>Blog {blogId}</Link>
      </h2>
    </>
  );
}
