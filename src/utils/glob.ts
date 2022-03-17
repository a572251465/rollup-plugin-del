import glob from 'glob'

/**
 * @author lihh
 * @description 进行全局文件匹配match
 * @param path 文件路径
 */
const globalMatch = async (path: string): Promise<string[]> => new Promise((resolve, reject) => {
  glob(path, (err, files: string[]) => {
    if (err) {
      reject(err)
      return
    }

    resolve(files)
  })
})

export default globalMatch
