import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {

    const id = (await params).movieId

  return (
    <div>
      <h1>moview details</h1>
      <h2>movie id : {id}</h2>
    </div>
  );
}
