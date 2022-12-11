import SpinBasic from './spin/basic.vue'
import SpinTarget from './spin/target.vue'
import SpinText from './spin/text.vue'
import SpinType from './spin/type.vue'

import InputBasic from './input/basic.vue'
import InputSize from './input/size.vue'
import InputPrefixOrSuffix from './input/prefixOrSuffix.vue'
import InputLoading from './input/loading.vue'
import InputStatus from './input/status.vue'
import InputPassword from './input/password.vue'

export default [
  { name: 'SpinBasic', comp: SpinBasic },
  { name: 'SpinTarget', comp: SpinTarget },
  { name: 'SpinText', comp: SpinText },
  { name: 'SpinType', comp: SpinType },

  { name: 'InputBasic', comp: InputBasic },
  { name: 'InputSize', comp: InputSize },
  { name: 'InputPrefixOrSuffix', comp: InputPrefixOrSuffix },
  { name: 'InputLoading', comp: InputLoading },
  { name: 'InputStatus', comp: InputStatus },
  { name: 'InputPassword', comp: InputPassword }
]
