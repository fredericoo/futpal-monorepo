import { api } from "api";

import { autoGenSwaggerDocs } from "~/domains/docs/docs.swagger";
import { addCorsRules } from "~/domains/security/security.cors";
import { ctx } from "~/router/authenticated/router";

const app = ctx.app(api);
// app.use(userMiddleware);

addCorsRules(app);

app.get("/games", (_req, res) => {
  res.json({ name: "Bruv" });
});

autoGenSwaggerDocs(app, api);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚽ Futpal backend listening on port ${PORT}`);
});
