import SpinBasic from './spin/basic.vue'
import SpinTarget from './spin/target.vue'
import SpinText from './spin/text.vue'
import SpinType from './spin/type.vue'
import SpinBlockScroll from "./spin/blockScroll.vue"

import InputBasic from './input/basic.vue'
import InputSize from './input/size.vue'
import InputPrefixOrSuffix from './input/prefixOrSuffix.vue'
import InputLoading from './input/loading.vue'
import InputStatus from './input/status.vue'
import InputPassword from './input/password.vue'
import InputClear from './input/clear.vue'
import InputMaxLength from './input/maxLength.vue'
import InputDisabled from './input/disabled.vue'

export default [
  { name: 'SpinBasic', comp: SpinBasic },
  { name: 'SpinTarget', comp: SpinTarget },
  { name: 'SpinText', comp: SpinText },
  { name: 'SpinType', comp: SpinType },
  { name: 'SpinBlockScroll', comp: SpinBlockScroll },

  { name: 'InputBasic', comp: InputBasic },
  { name: 'InputSize', comp: InputSize },
  { name: 'InputPrefixOrSuffix', comp: InputPrefixOrSuffix },
  { name: 'InputLoading', comp: InputLoading },
  { name: 'InputStatus', comp: InputStatus },
  { name: 'InputPassword', comp: InputPassword },
  { name: 'InputClear', comp: InputClear },
  { name: 'InputMaxLength', comp: InputMaxLength },
  { name: 'InputDisabled', comp: InputDisabled }
]
