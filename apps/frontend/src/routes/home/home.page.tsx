import { useLoaderData } from "~/domains/routing/routing.utils";
import { homeLoader } from "~/routes/home";

export const HomePage = () => {
  const data = useLoaderData<typeof homeLoader>();
  return <div>Hey {data.name}</div>;
};
