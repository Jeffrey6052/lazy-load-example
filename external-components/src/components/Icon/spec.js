
export const IconsSpecs = {
    properties: [
        {
            identifier: "$width",
            defaultValue: 64
        },
        {
            identifier: "$height",
            defaultValue: 64
        },
        {
            identifier: "iconData",
            text: "图标",
            type: "icon",
            defaultValue: {
                theme: "outlined",
                type: "play-circle"
            }
        },
        {
            identifier: "color",
            text: "颜色",
            type: "color",
            defaultValue: '#555',
            validityIdentifier: "customColor",
            validityDefaultValue: false
        },
        {
            identifier: "customInfo",
            text: "自定义SVG",
            type: "text",
            defaultValue: "",
            options: {
                language: "xml"
            }
        },
    ],
    variables: [
        {
            identifier: "value",
            text: "文本内容",
            type: "string",
            defaultValue: ""
        }
    ]
}

