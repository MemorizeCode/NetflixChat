
import fs from 'fs/promises'
import path from 'path'

export default async (layer, name) => {
    try {
        const url = path.resolve('./', './src')
        console.log(url)
        const layerPath = path.resolve(url, layer, name)
        await fs.mkdir(layerPath);

        await fs.mkdir(path.resolve(url, layer, name, 'models'))
        await fs.mkdir(path.resolve(url, layer, name, 'ui'))


        await fs.mkdir(path.resolve(url, layer, name, 'models', 'slice'))
        await fs.writeFile(path.resolve(url, layer, name, 'models', 'slice', `${name.toLowerCase()}Slice.ts`), "")

        await fs.mkdir(path.resolve(url, layer, name, 'models', 'types'))
        await fs.writeFile(path.resolve(url, layer, name, 'models', 'types', `${name}Schema.ts`), "")

        await fs.mkdir(path.resolve(url, layer, name, 'models', 'service'))
        await fs.mkdir(path.resolve(url, layer, name, 'models', 'selectors'))


        await fs.writeFile(path.resolve(url, layer, name, 'index.ts'), "")

        await console.log("ADD SLICE IN STORE")
        await console.log("ADD SLICE IN STORE")
        await console.log("ADD SLICE IN STORE")
        await console.log("ADD SLICE IN STORE")
    }
    catch (e) {
        console.log(e)
    }
}