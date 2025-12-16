# CrowdStrike AIDR MCP Server

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction)
server that provides integration with CrowdStrike AIDR APIs.

![sample output](.github/assets/sample-output.png)

## Prerequisites

- Node.js v24.11.1 or greater.
- A CrowdStrike AIDR API token.

## Usage with Claude Desktop

Edit the following configuration file (create it if it does not exist):

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Replace (or merge) the file contents with the following:

```json
{
  "mcpServers": {
    "aidr": {
      "command": "npx",
      "args": ["-y", "@crowdstrike/aidr-mcp-server"],
      "env": {
        "CS_AIDR_TOKEN": "pts_00000000000000000000000000000000",
        "CS_AIDR_BASE_URL_TEMPLATE": "https://api.crowdstrike.com/aidr/{SERVICE_NAME}"
      }
    }
  }
}
```

1. Update the `CS_AIDR_TOKEN` value to the CrowdStrike AIDR API token.
1. Update the `CS_AIDR_BASE_URL_TEMPLATE` value to the CrowdStrike AIDR base URL template.
1. Restart Claude Desktop.

## Tools

### AI Guard

- **prompt_guard** — Analyze and redact text to avoid manipulation of the model,
  addition of malicious content, and other undesirable data transfers.
