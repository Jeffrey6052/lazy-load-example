
import { Spin } from 'antd'

const Loading = (props) => {

  const style = {
    marginTop: 40,
    marginBottom: 40,
    width: "100%",
    display: "flex",
    justifyContent: "cneter"
  }

  return (
    <div style={style}>
      <Spin />
    </div>
  )
}

export default Loading