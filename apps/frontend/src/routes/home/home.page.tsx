import { Button, Container } from "@chakra-ui/react";

import { Deferred } from "~/domains/common/components/Deferred";
import { useLoaderData } from "~/domains/routing/routing.utils";
import type { homeLoader } from "~/routes/home";

export const HomePage: React.FC = () => {
  const {test} = useLoaderData<typeof homeLoader>();

  return (
    <Container maxW="container.md" py="8">
      Hey <Deferred errorElement={<div>Error!</div>} fallback={<div>Loading…</div>} data={test}>{test => test.name}</Deferred>
      <Button color="futpal.800">Test button</Button>
    </Container>
  );
};
