const express = require("express");
const server = express();
const { promisify } = require("util");
const { join } = require("path");
const readFile = promisify(require("fs").readFile);
const render = require("preact-render-to-string");
const { h } = require("preact");
const { createMemoryHistory } = require("history");

const { ssr } = require("preact-async-router");
const { App, Routes, actions } = require("./dist/app.js");

const templateFile = join(__dirname, "index.template.html");
let template;

const staticPath = join(__dirname, "dist");
server.use("/dist", express.static(staticPath));

server.get("*", ({ url }, res) => {
  ssr(url, Routes({ history: createMemoryHistory() }))
    .then(route => {
      const html = render(h(App, {}, route));
      res.send(template.replace("<!-- app -->", html));
    })
    .catch(console.error);
});

readFile(templateFile, "utf-8")
  .then(data => {
    template = data;
    server.listen(3000);
  })
  .catch(console.error);
