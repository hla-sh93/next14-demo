import { Metadata } from "next";

type Props = {
  params: {
    blogId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`The Name ${params.blogId}`);
    }, 100);
  });

  return {
    title: `Blog ${title}`,
  };
};

export default function BlogDetails({
  params,
}: {
  params: { blogId: string };
}) {
  return (
    <>
      <h1>Details for Blog {params.blogId}</h1>
    </>
  );
}
