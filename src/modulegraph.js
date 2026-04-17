import { readFileSync } from 'node:fs';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import { transformFromAst } from '@babel/core';

const traverse = traverseModule.default;

export class ModuleGraph {
  constructor(){
    this.ID = 0;
  }

  createAsset(filePath){
    const content = readFileSync(filePath, 'utf8');
    const ast = parse(content, { sourceType: 'module'});

    const dependencies = [];

    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value);     
      }
    })
  
    const { code } = transformFromAst(ast, undefined, {
      presets: ["@babel/preset-env"],
    });

    return {
      id: this.ID++,
      filePath,
      code,
      dependencies,
      outGoingConnection: {},
    };
  }

  createGraph(entryFilePath){
    const entryAsset = this.createAsset(entryFilePath);
    const q = [entryAsset];

    for(const asset of queue){
      for(const dep of asset.dependencies){
        const dirName = path.dirName(asset.filePath);
        const filePath = path.join(dirName, dep);
        const childAsset = this.createAsset(filePath);
        asset.outGoingConnection[dep] = childAsset.id;

        q.push(childAsset);
      }
    }

    return q;
  }
}
