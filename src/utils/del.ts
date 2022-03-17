import { removeSync, pathExistsSync } from 'fs-extra'
const set = new Set()

const del = (paths: string[]) => {
  paths.forEach((dirPath) => {
    if (!set.has(dirPath) && pathExistsSync(dirPath)) {
      removeSync(dirPath)
      set.add(dirPath)
    }
  })
}

export default del
