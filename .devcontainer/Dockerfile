# Make sure RUBY_VERSION matches the Ruby version in .ruby-version
ARG RUBY_VERSION=3.4.1
FROM ghcr.io/rails/devcontainer/images/ruby:$RUBY_VERSION

# Set the installation directory for Bun package manager
ENV BUN_INSTALL="/home/vscode/.bun"
ENV PATH="/home/vscode/.bun/bin:$PATH"
