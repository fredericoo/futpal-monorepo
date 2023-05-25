import { withSwaggerDocs } from "@/lib/docs/swagger-docs";
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
  res.json({ name: "yo, let’s go!" });
});

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   if (id === "1") {
//     res.json({
//       id: 1,
//       name: "John",
//     });
//   } else {
//     res.status(404).json({ code: "not_found", message: "User not found" });
//   }
// });

withSwaggerDocs(app, api);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`⚽ Futpal backend listening on port ${PORT}`);
});
