export function assetPath(relativePath: string) {
  const cleanedPath = relativePath.replace(/^\.\/*/, '').replace(/^\/+/, '')
  return `/${cleanedPath}`
}
