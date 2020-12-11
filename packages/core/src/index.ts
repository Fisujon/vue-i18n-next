import { registerMessageCompiler } from './context'
import { compileToFunction } from './compile'

// register message compiler at @intlify/core
registerMessageCompiler(compileToFunction)

export * from './context'
export * from './compile'
export * from './translate'
export * from './datetime'
export * from './number'
export * from './debugger'
export * from './warnings'
export * from './errors'
export * from './types'
