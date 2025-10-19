# Hudl Automation Project

Test automation suite for Hudl that covers basic login functionality using Playwright and TypeScript for two user types: Coach and Fan.

### Prerequisites
- Node.js 16+
- Chrome browser
- VS Code with Playwright Test for VSCode (extension)

### Installation

```bash
npm init playwright@latest
```

## Environment Setup
Copy .env.example to .env

Replace the below example test fake credentials with existing real Hudl Team/Coach & Fan credentials:

```bash
HUDL_COACH_EMAIL="coach-test-account@example.com"
HUDL_COACH_PASSWORD="coach-test-password"

HUDL_FAN_EMAIL="fan-test-account@example.com"
HUDL_FAN_PASSWORD="fan-test-password"
```

## Running Tests

```bash
# Run all tests (runs in headless mode)
npx playwright test

# Run specific test
npx playwright test <filename>

# Run all tests in headed mode (visible browser)
npx playwright test --headed

# View test report
npx playwright show-report
```
