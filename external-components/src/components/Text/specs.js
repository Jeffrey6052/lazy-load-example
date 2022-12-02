
export const TextSpecs = {
    properties: [
        {
            identifier: "$width",
            defaultValue: 240
        },
        {
            identifier: "$height",
            defaultValue: 32
        },
        {
            identifier: "content",
            text: "文本内容",
            defaultValue: "###",
            type: "string",
            options: {
                quickEdit: true
            }
        },
        {
            identifier: "fontSize",
            text: "字体大小",
            defaultValue: 14,
            type: "number"
        },
        {
            identifier: "fontColor",
            text: "文本颜色",
            defaultValue: "rgba(0, 0, 0, .65)",
            type: "color"
        },
        {
            identifier: "spaceEnable",
            text: "是否换行",
            defaultValue: false,
            type: "bool"
        },
        {
            identifier: "textOverflowEnable",
            text: "是否省略",
            defaultValue: true,
            type: "bool",
            visible: ({ contextProps }) => {
                return !contextProps.spaceEnable
            }
        },
        {
            identifier: "autoHeightGroup",
            text: "动态高度",
            type: "group",
            defaultValue: false,
            validityIdentifier: "autoHeightActive",
            validityDefaultValue: false,
            options: {
                items: [
                    {
                        identifier: "minHeight",
                        text: "最小高度",
                        type: "number",
                        defaultValue: 100,
                        validityIdentifier: "minHeightActive",
                        validityDefaultValue: false
                    },
                    {
                        identifier: "maxHeight",
                        text: "最大高度",
                        type: "number",
                        defaultValue: 400,
                        validityIdentifier: "maxHeightActive",
                        validityDefaultValue: false
                    }
                ]
            }
        }
    ],
    variables: [],
    events: []
}