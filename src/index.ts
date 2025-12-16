#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { registerAiGuardTools } from './tools/ai-guard.js';
import type { ServerContext } from './types.js';

function configureServer({
  server,
  context,
}: {
  server: McpServer;
  context: ServerContext;
}) {
  registerAiGuardTools({ server, context });
}

async function main() {
  if (!process.env.CS_AIDR_TOKEN) {
    throw new Error('Missing environment variable: CS_AIDR_TOKEN');
  }
  if (!process.env.CS_AIDR_BASE_URL_TEMPLATE) {
    throw new Error('Missing environment variable: CS_AIDR_BASE_URL_TEMPLATE');
  }

  const server = new McpServer({
    name: 'CrowdStrike AIDR MCP',
    version: '0.1.0',
  });
  const transport = new StdioServerTransport();
  configureServer({
    server,
    context: {
      apiToken: process.env.CS_AIDR_TOKEN,
      baseURLTemplate: process.env.CS_AIDR_BASE_URL_TEMPLATE,
    },
  });
  await server.connect(transport);
}

main();
