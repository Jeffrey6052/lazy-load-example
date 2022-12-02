import { Icon } from 'antd';
import React, { Component } from 'react'
import { IconsSpecs } from './spec'
import tinycolor from 'tinycolor2'
import styled from 'styled-components'

const Wrapper = styled.div`

    width: ${props => props.$width}px;
    height: ${props => props.$height}px;

    .icons, .customIcon {
        height:${props => props.$height + 'px'};
        width:${props => props.$width + 'px'};
        color: ${props => props.customColor ? tinycolor(props.color).toString() : ''};
        svg {
            width: 100%; /*1em*/
            height: 100%;
        }
    }   

`


class Icons extends Component {
    constructor(props) {
        super(props)
        this.customSvg = this.customSvg.bind(this)
    }

    customSvg() {
        const { customInfo, customColor } = this.props

        let html = null
        // return this.props.customInfo

        const style = {}

        if (customColor) {
            style.fill = "currentColor"
            html = customInfo.replace(/fill=[^\s]*/g, '')
        } else {
            html = customInfo
        }


        return (
            <span style={style} dangerouslySetInnerHTML={{ __html: html }} />
        )
    }

    render() {

        // console.log('this.props.custoIfo', this.customSvg())


        const { iconData } = this.props
        if (this.props.customInfo) {
            return (

                <Wrapper {...this.props}>
                    <Icon component={this.customSvg} className='customIcon' />
                </Wrapper>
            )
        } else {
            return (
                <Wrapper {...this.props}>
                    <Icon type={iconData.type} theme={iconData.theme} className='icons' />
                </Wrapper>
            )
        }


    }
}


export default {
    specs: IconsSpecs,
    component: Icons
}
