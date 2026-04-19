function transformModuleToFunction(mod){
  const func = `function(require, module, exports){
        ${mod.code}
        }
    `;
  return func;
}

export function bundle(graph){
    let modules = '';

    for(const mod of graph){
      modules += `${mod.id}: [${transformModuleToFunction(mod)}, ${JSON.stringify(mod.outGoingConnections)}],`;
    }

    const requireFn = `
        function require(modId) {
          const [fn, outGoingConnections] = modules[modId];
              
          function localRequire(filePath){
            return require(outGoingConnections[filePath]); 
          }
          
          const module = { exports: {} };
          fn(localRequire, module, module.exports);
          
          return module.exports;
        }
    `;

    const result = `(function (modules) {
      ${requireFn}    
      require(0);
    })({${modules}})`;

    return result;
  }

