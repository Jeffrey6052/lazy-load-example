
import React from "react"
import tinycolor from 'tinycolor2'

import { TextSpecs } from "./specs"

class Text extends React.Component {

    render() {

        const { props } = this

        const {
            $autoHeightEnabled,
            autoHeightActive,
            minHeightActive,
            maxHeightActive,
            minHeight,
            maxHeight,
            $mode,
        } = props

        const _autoHeightActive = $autoHeightEnabled && autoHeightActive

        const space = props.spaceEnable ? "initial" : "nowrap"
        const ellipsis = props.textOverflowEnable ? 'ellipsis' : 'initial'


        let overflow = "initial"
        if (props.textOverflowEnable || $mode === "edit") {
            overflow = "hidden"
        }

        const style = {
            position: "relative",
            width: props.$width,
            height: _autoHeightActive ? "auto" : props.$height,
            overflow: overflow,
            minHeight: _autoHeightActive && minHeightActive && minHeight,
            maxHeight: _autoHeightActive && maxHeightActive && maxHeight
        }

        const textStyle = {
            display: "inline-block",
            width: "100%",
            overflow: overflow,
            textOverflow: ellipsis,
            whiteSpace: space,
            fontSize: props.fontSize,
            color: tinycolor(props.fontColor).toString()
        }

        return (
            <div style={style}>
                <span style={textStyle}>{props.content}</span>
            </div>
        )
    }
}

export default {
    specs: TextSpecs,
    component: Text
}