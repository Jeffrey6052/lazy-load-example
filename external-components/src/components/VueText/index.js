
import TextComponent from "./component.vue"
import { TextSpecs } from "./specs"

import { processVueComponent } from "@/system/utils"

export default processVueComponent({
  component: TextComponent,
  specs: TextSpecs
})
