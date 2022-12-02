import React from 'react'

import { importAllComponents } from "@/system/utils"

class EditorPage extends React.Component {

    constructor(props) {
        super(props)

        const offlineSaveKey = "LocalDevData"

        this.state = {
            pageData: this.getPageData(offlineSaveKey, props.pageData),
            editorLoaded: false,
            componentsLoaded: false,
            components: {}
        }

        this.params = new URLSearchParams(this.props.location.search)

        this.offlineSaveKey = offlineSaveKey
    }

    componentDidMount() {

        // 加载全部组件
        importAllComponents().then((components) => {
            this.setState({
                components: components,
                componentsLoaded: true
            })
        })

        this.editorLoadTimer = window.setInterval(() => {
            if (this.state.editorLoaded) return
            if (!window.LocalWebEditor) return

            this.setState({
                editorLoaded: true
            })
        }, 50)
    }

    componentDidUpdate() {
        if (this.state.editorLoaded && this.editorLoadTimer) {
            window.clearInterval(this.editorLoadTimer)
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.editorLoadTimer)
    }

    isPreview() {
        return this.params.get("preview") != null
    }

    getPageData(saveKey, _defaultPageData) {

        const defaultPageData = _defaultPageData || {
            width: 1440,
            height: 900,
            backgroundColor: {
                r: 255,
                g: 255,
                b: 255,
                a: 1
            },
            defaultGlobalVariables: {},
            customModules: [],
            dataConnections: []
        }

        const pageDataString = localStorage.getItem(saveKey)
        if (!pageDataString) return defaultPageData

        try {
            const pageData = JSON.parse(pageDataString)
            return pageData
        } catch (e) {
            // 如果无法读取，则清除存储的数据
            localStorage.removeItem(saveKey)
            return defaultPageData
        }
    }

    render() {

        const { LocalWebEditor } = window
        if (!LocalWebEditor) return null

        const { pageData, componentsLoaded, components } = this.state
        if (!pageData) return null
        if (!componentsLoaded) return null

        const isPreview = this.isPreview()
        const basePath = "/"

        return (
            <LocalWebEditor
                pageData={pageData}
                basePath={basePath}
                isPreview={isPreview}
                localComponents={components}
                offlineSaveSupport={true}
                offlineSaveKey={this.offlineSaveKey}
            />
        )
    }
}

export default EditorPage