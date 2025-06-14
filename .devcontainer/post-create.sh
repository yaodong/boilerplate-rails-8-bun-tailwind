#!/bin/bash
set -euo pipefail

echo "Installing Claude Code..."
bun install -g @anthropic-ai/claude-code

echo "Running setup script..."
bin/setup --skip-server

echo "Installing overcommit..."
overcommit --install
