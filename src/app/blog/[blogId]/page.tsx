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
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Something went wrong");
  }
  return (
    <>
      <h1>Details for Blog {params.blogId}</h1>
    </>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
