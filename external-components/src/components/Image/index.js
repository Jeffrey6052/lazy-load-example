
import React from "react"
import PropTypes from 'prop-types'
import { ImageSpecs } from "./specs"

import { staticUrl } from "@/system/utils"

class Image extends React.Component {

    constructor(props) {
        super(props)
        this.state={}
    }

    renderTip() {
        const { $width, $height } = this.props

        const style = {
            width: $width,
            height: $height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundSize: '100% 100%',
            backgroundImage: `url(${staticUrl("images/default.jpg")})`
        }

        return (
            <div style={style}></div>
        )
    }

    render() {

        const { props } = this

        // console.log("render Image", props)

        if (!props.imgUrl) {
            return this.renderTip()
        }

        const style = {
            width: props.$width,
            height: props.$height,
            position: "relative",
            display: "block"
        }

        return (
            <img src={props.imgUrl} style={style} alt=""/>
        )
    }
}

Image.propTypes = {
    imgUrl: PropTypes.string.isRequired
}

export default {
    component: Image,
    specs: ImageSpecs
}