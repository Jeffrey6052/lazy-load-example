
import InputComponent from "./component.vue"
import { InputSpecs } from "./specs"

import { processVueComponent } from "@/system/utils"

export default processVueComponent({
  component: InputComponent,
  specs: InputSpecs
})
