import styled from 'styled-components'
import React from "react"
import PropTypes from 'prop-types'
import { Input } from "antd"

import styles from "./styles.module.css"

import { InputSpecs } from "./specs"

const { Search } = Input;


const Wrap = styled.div`
    height:${props => props.$height}px;
    width:${props => props.$width}px;
`
const WrapSearch = styled.div`
    .ant-input {
        width:${props => props.$width}px;  
        height:${props => props.$height}px;
    }
`


class WebInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue
        }
    }

    componentDidMount() {
        const { value } = this.state
        this.props.$setVariables({ value: value })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.defaultValue !== this.props.defaultValue) {
            this.updateValue(this.props.defaultValue)
        }
    }

    onInputChange(event) {
        let inputValue = event.target.value

        const { process, processActive } = this.props
        if (processActive) {
            inputValue = process(inputValue) || ""
        }

        this.updateValue(inputValue)
    }

    updateValue(value) {
        this.setState({ value: value })
        this.props.$setVariables({ value: value })
    }

    onSearchChange(value) {
        this.props.$setVariables({
            value: value
        })
    }

    render() {

        const { $width, $height, placeholder, disabled, type } = this.props

        const { value } = this.state

        const style = {
            width: $width,
            height: $height
        }
        return (
            <Wrap $width={$width} $height={$height}>
                <Input
                    type={type}
                    className={styles.block}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => this.onInputChange(e)}
                    style={style}
                    placeholder={placeholder}
                />
            </Wrap>
        )

    }
}

WebInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

WebInput.defaultProps = {
    searchEnable: false,
    disabled: false
}

export default {
    specs: InputSpecs,
    component: WebInput
}
