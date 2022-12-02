export const InputSpecs = {
  properties: [
      {
          identifier: "$width",
          defaultValue: 240
      },
      {
          identifier: "$height",
          defaultValue: 32,
          process: (value) => {
              let num = parseInt(value)
              if (isNaN(num)) num = 16
              if (num < 16) num = 16
              return num
          }
      },
      {
          identifier: "defaultValue",
          text: "默认值",
          type: "string",
          defaultValue: "",
          options: {
              quickEdit: true
          }
      },
      {
          identifier: "placeholder",
          text: "提示语",
          type: "string",
          defaultValue: "请输入内容"
      },
      {
          identifier: "disabled",
          text: "是否禁用",
          type: "bool",
          defaultValue: false
      },
      {
          identifier: "process",
          text: "数据预处理",
          type: "func",
          defaultValue: "",
          validityIdentifier: "processActive",
          validityDefaultValue: false,
          options: {
              args: ["text"]
          }
      }
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