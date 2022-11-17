
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  QuestionCircleOutlined
} from '@ant-design/icons'

const MyIcon = (props) => {

  if (props.type === "HomeOutlined") {
    return <HomeOutlined />
  } else if (props.type === "LoadingOutlined") {
    return <LoadingOutlined />
  } else if (props.type === "SettingFilled") {
    return <SettingFilled />
  } else {
    return <QuestionCircleOutlined />
  }
}

export default MyIcon