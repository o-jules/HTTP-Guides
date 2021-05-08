const fs = require("fs");
const path = require("path");
const Koa = require("koa");
const Router = require('@koa/router');

function template(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, "/templates/", filePath), { encoding: "utf-8" }, (err, data)=> {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	})
}

const app = new Koa();
const router = new Router();

app.keys = ['random keys to sign cookie', 'N9-#3pm87@5!'];

router.get('/', async (ctx, next) => {
	await next();
	const name = ctx.cookies.get('name', { signed: true });
	if (!name) {
		ctx.cookies.set('name', 'neko', { signed: true });
	}
	ctx.body = await template("index.html", { encoding: "utf-8" });
	ctx.response.header["content-type"] = "text/html; charset=utf-8";
});

router.get('/script/:type', async (ctx, next) => {
	await next();
	const name = ctx.cookies.get('name', { signed: true });
	ctx.response.header["content-type"] = "application/javascript";
	// ctx.response.header['access-control-allow-origin'] = "*";

	if (name) {
		ctx.body = await template("auth.js", { encoding: "utf-8" });
	} else {
		ctx.body = await template("guest.js", { encoding: "utf-8" });
	}
});

app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});

app.on('error', err => {
	console.error('server error', err)
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(5020);
