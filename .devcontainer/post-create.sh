#!/bin/bash

echo "Running setup script..."
bin/setup --skip-server

echo "installing overcommit..."
overcommit --install

echo "Installing Claude Code..."
bun install -g @anthropic-ai/claude-code
