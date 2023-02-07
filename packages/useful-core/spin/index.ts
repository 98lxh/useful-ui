import Spin from './src'
import { withInstall } from '@useful-ui/utils'

export { default as useSpin } from '../_hooks/spin'
export const UseSpin = withInstall(Spin)
export * from './src/props'

export default Spin
