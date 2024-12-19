import { fromHono } from "chanfana";
import { Hono } from "hono";
import { Ping } from "endpoints/ping";
import { UrlFetch } from "./endpoints/urlFetch";

type Bindings = {
	GDIO_REDIRECTS: KVNamespace;
};

// Start a Hono app
const app = new Hono<{ Bindings: Bindings }>();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/api/docs",
	redoc_url: "/api/redocs",
	openapi_url: "/api/openapi.json",
});

// Register OpenAPI endpoints
openapi.get("/ping", Ping);
openapi.get("/api/ping", Ping);
openapi.get("/url/:slug", UrlFetch);
openapi.get("/api/url/:slug", UrlFetch);

// Export the Hono app
export default app;
