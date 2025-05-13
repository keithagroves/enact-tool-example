# Enact Example Tool

A simple example tool for the Enact Protocol that can be executed via NPX.

## Usage

You can run this tool directly via NPX:

```bash
npx enact-example-tool --operation echo --message "Hello, Enact!"
```

## Operations

This tool supports several operations:

### Echo
```bash
npx enact-example-tool --operation echo --message "Your message here"
```

### Count Words
```bash
npx enact-example-tool --operation countWords --text "Text to count words in"
```

### Generate Report
```bash
npx enact-example-tool --operation generateReport --title "Report Title" --content "Report content goes here"
```

## Enact Protocol Integration

Use the following Enact tool definition:

```yaml
enact: 1.0.0
id: ExampleTool
description: "Example tool with multiple operations"
version: 1.0.0
type: npx
package: "enact-example-tool"
args:
  - "--operation={{operation}}"
  - "--message={{message}}"
  - "--text={{text}}"
  - "--title={{title}}"
  - "--content={{content}}"
inputs:
  type: object
  properties:
    operation:
      type: string
      enum: ["echo", "countWords", "generateReport"]
      default: "echo"
      description: "Operation to perform"
    message:
      type: string
      description: "Message for echo operation"
    text:
      type: string
      description: "Text for countWords operation"
    title:
      type: string
      description: "Title for generateReport operation"
    content:
      type: string
      description: "Content for generateReport operation"
  required: ["operation"]
```

## License

MIT
