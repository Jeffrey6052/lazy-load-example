
import { Link } from "react-router-dom"

import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  QuestionCircleOutlined,
  LinkOutlined
} from '@ant-design/icons'

const MyIcon = (props) => {

  const renderIcon = () => {
    if (props.type === "HomeOutlined") {
      return <HomeOutlined />
    } else if (props.type === "LoadingOutlined") {
      return <LoadingOutlined />
    } else if (props.type === "SettingFilled") {
      return <SettingFilled />
    } else if (props.type === "LinkOutlined") {
      return <LinkOutlined />
    } else {
      return <QuestionCircleOutlined />
    }
  }

  if (!props.linkTo) {
    return renderIcon()
  } else {
    return (
      <Link to={props.linkTo}>
        {renderIcon()}
      </Link>
    )
  }
}

export default MyIcon