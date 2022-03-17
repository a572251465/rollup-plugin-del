import { IInputOptions } from '../types'
import globalMatch from './utils/glob'
import type { NormalizedOutputOptions } from 'rollup'
import path from 'path'
import del from './utils/del'

const rollupPluginDel = (options: IInputOptions = {}) => {
  let dirs: string[] = []

  return {
    name: 'del',
    async buildStart() {
      if (Reflect.has(options, 'dest')) {
        const res = await globalMatch(options.dest!)
        dirs = res.length > 0 ? res : []
      }
    },
    renderStart(
      outputOptions: NormalizedOutputOptions | NormalizedOutputOptions[]
    ) {
      if (dirs.length > 0) return null

      const arr = Array.isArray(outputOptions) ? outputOptions : [outputOptions]
      arr.forEach((option) => {
        if (option.dir || option.file) {
          dirs.push(option.dir || path.dirname(option.file!))
        }
      })

      dirs = [...new Set(dirs)]

      return null
    },

    generateBundle() {
      del(dirs)
      return null
    }
  }
}

export default rollupPluginDel
