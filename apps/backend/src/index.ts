import { withSwaggerDocs } from "@/domains/docs/docs.swagger";
import { ctx } from "@/router/authenticated/router";
import { api } from "api";
import cors from "cors";

const allowedOrigins = ["http://localhost:5173"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = ctx.app(api);
// app.use(userMiddleware);
app.use(cors(options));

app.get("/games", async (req, res) => {
  res.json({ name: "Freddie" });
});

withSwaggerDocs(app, api);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚽ Futpal backend listening on port ${PORT}`);
});
