
const MyBackground = (props) => {

  const style = {
    width: 100,
    height: 60,
    backgroundColor: props.backgroundColor
  }

  return (
    <div style={style}></div>
  )

}

export default MyBackground