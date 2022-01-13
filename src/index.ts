import "reflect-metadata";
import { createConnection } from "typeorm";
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
import router from "./routes/userRoutes";
import app from './app'
import { PORT } from "./config";
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Backend dev API",
			version: "1.0.0",
			description: "A simple Backend Dev API",
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
			},
		],
	},
	apis: ["./src/routes/userRoutes.ts"],
	explorer: true
};


const specs = swaggerJsDoc(options);

createConnection()
	.then(async (connection) => {

		app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

		app.listen(PORT)
		console.log(`App is running at port ${PORT}`);
    })
	.catch((error) => console.log(error));