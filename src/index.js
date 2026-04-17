import { join } from "node:path";
import { ModuleGraph } from "./modulegraph.js";
import { Bundler } from "./bundle.js";

const moduleGraphObj = new ModuleGraph();
const entryFilePath = join(process.cwd(), "example", "index.js");
const graph = moduleGraphObj.createGraph(entryFilePath);

const bundler = new Bundler();
const bundledCode = bundler.bundle(graph);

console.log(bundledCode);
