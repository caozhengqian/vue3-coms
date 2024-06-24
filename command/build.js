const path = require('path')
const {defineConfig,build} = require('vite')
// const vue = require(@vitejs/vuePlugin)
const vue = require("@vitejs/plugin-vue");
// const vueJsx = require("@vitejs/plugin-vue-jsx")
const fsExtra = require('fs-extra')
const fs = require('fs')

const entryDir = path.resolve(__dirname,'../packages')
const outDir = path.resolve(__dirname,'../lib')

const baseConfig = defineConfig({
  configFile:false,
  publicDir:false,
  plugins:[vue()]
})

const rollupOptions = {
  external:['vue','vue-router'],
  output:{
    globals:{
      vue:'Vue'
    }
  }
}

const buildAll = async ()=>{
  await build({
    ...baseConfig,
    build:{
      rollupOptions,
      lib:{
        entry:path.resolve(entryDir,'index.ts'),
        name:'index',
        fileName:'index',
        formats:["es","umd"]
      },
      outDir
    }
  })
}
const buildSingle = async (name)=>{
  await build({
    ...baseConfig,
    build:{
      rollupOptions,
      lib:{
        entry:path.resolve(entryDir,name),
        name:'index',
        fileName:'index',
        formats:["es","umd"]
      },
      outDir:path.resolve(outDir,name)
    }
  })
}
const createPackageJson = (name)=>{
  const fileStr = `
    {
      "name":"${name}",
      "main":"index.umd.js",
      "moudle":"index.es.js",
      "style":"styles.css"
    }
  `
  fsExtra.outputFile(
      path.resolve(outDir,`${name}/package.json`),
      fileStr,
      'utf-8'
  )
}
const buildLib = async()=>{
  await buildAll()
  const components = fs.readdirSync(entryDir).filter(name=>{
    const componentDir = path.resolve(entryDir,name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
  for(const name of components){
    await buildSingle(name)
    await createPackageJson(name)
  }
}


buildLib()
