"use client";
import React, { useEffect, useState } from "react";
import { client } from "./client/trpc";

const Page = () => {
  const [response, setResponse] = useState<null | string>(null);
  useEffect(() => {
    async function hello() {
      const trpcResponse = await client.greeting.query();
      setResponse(trpcResponse);
    }
    hello();
  }, []);

  return (
    <div>
      page<br></br>
      {response ? response : "loading"}
    </div>
  );
};

export default Page;
