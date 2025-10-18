# Hudl Login Automation

Test automation suite for Hudl login functionality using Playwright and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Chrome browser

### Installation

```bash
npm init playwright@latest
```

## Environment Setup
Copy .env.example to .env

Replace the below example test credentials with existing Hudl Team/Coach & Fan credentials:

```bash
HUDL_COACH_EMAIL="coach-test-account@example.com"
HUDL_COACH_PASSWORD="coach-test-password"

HUDL_FAN_EMAIL="fan-test-account@example.com"
HUDL_FAN_PASSWORD="fan-test-password"
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# View test report
npx playwright show-report
```
