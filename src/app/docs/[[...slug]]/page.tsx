export default function DocsDetails({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        {" "}
        Viewing docs for feature {params.slug[0]} and concept for{" "}
        {params.slug[1]}{" "}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1> Viewing docs for Feature {params.slug[0]}</h1>;
  }

  return <h1> Documentation Page</h1>;
}
