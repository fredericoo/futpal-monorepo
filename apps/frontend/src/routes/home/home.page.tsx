import { Button, Container } from "@chakra-ui/react";

import { useLoaderData } from "~/domains/routing/routing.utils";
import type { homeLoader } from "~/routes/home";

export const HomePage: React.FC = () => {
  const data = useLoaderData<typeof homeLoader>();

  return (
    <Container maxW="container.md" py="8">
      Hey {data.name}
      <Button color="futpal.800">Test button</Button>
    </Container>
  );
};
