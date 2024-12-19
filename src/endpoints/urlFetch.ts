import { OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";
import { Redirect } from "../types";

export class UrlFetch extends OpenAPIRoute {
	schema = {
		tags: ["Redirects"],
		summary: "Get the URL for a redirect by slug",
		request: {
			params: z.object({
				slug: Str({ description: "Redirect slug" }),
			}),
		},
		responses: {
			"200": {
				description: "Returns the URL for a redirect",
				content: {
					"application/json": {
						schema: z.object({
							redirect: z.object({
								redirect: Redirect,
							}),
						}),
					},
				},
			},
			"404": {
				description: "Redirect not found",
			},
		},
	};

	async handle(c) {
		return {
			success: true,
			redirect: {
				slug: "slug",
				url: "url",
			},
		};
	}
}
