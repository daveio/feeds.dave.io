import { fromHono } from "chanfana";
import { Ping } from "endpoints/ping";
import { Hono } from "hono";

/* trunk-ignore(biome/lint/complexity/noBannedTypes) */
type Bindings = {};

// Start a Hono app
const app = new Hono<{ Bindings: Bindings }>();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/feeds/docs",
	redoc_url: "/feeds/redocs",
	openapi_url: "/feeds/openapi.json",
});

// Register OpenAPI endpoints
openapi.get("/ping", Ping);
openapi.get("/feeds/ping", Ping);

// Export the Hono app
export default app;
