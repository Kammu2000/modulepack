import { join } from "node:path";
import { ModuleGraph } from "./modulegraph.js";
import { bundle } from "./bundle.js";

const moduleGraphObj = new ModuleGraph();
const entryFilePath = join(process.cwd(), "example", "index.js");
const graph = moduleGraphObj.createGraph(entryFilePath);

const bundledCode = bundle(graph);

console.log(bundledCode);
