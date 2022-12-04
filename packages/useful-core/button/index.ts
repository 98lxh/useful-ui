import Button from './src/index'
import ButtonGroup from './src/group'

import { withInstall } from '@useful-ui/utils'

export const UseButton = withInstall(Button)
export const UseButtonGroup = withInstall(ButtonGroup)

export * from './src/props'

export { Button, ButtonGroup }
