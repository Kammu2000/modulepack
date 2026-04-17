# Modulepack

Modulepack is a minimal JavaScript bundler built for learning how bundlers work under the hood.

It focuses on understanding how modules are parsed, how dependency graphs are built, and how code gets bundled and executed in the browser.

## Why this exists

Most bundlers feel like magic from the outside. This project is my attempt to break that magic apart and rebuild it step by step.

## What it covers

- Parsing JavaScript files into ASTs
- Building a module dependency graph
- Handling ES module imports/exports
- Generating a bundled output file
- Basic resolution of file paths and dependencies

## Goals

- Learn how tools like Webpack/Rollup actually work internally
- Build intuition around module systems and bundling pipelines

## Useful Links

- [AST Explorer](https://astexplorer.net/)
- [Babel REPL](https://babeljs.io/repl)
- [@babel/parser](https://babeljs.io/docs/babel-parser)
- [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)
- [Webpack — Modules](https://webpack.js.org/concepts/modules/)

## Getting started

```bash
git clone git@github.com:your-username/modulepack.git
cd modulepack
node src/index.js

