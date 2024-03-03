// jest.config.js
const nextJest = require("next/jest")

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({
  dir: "./",
})

// Any custom config you want to pass to Jest
const customJestConfig = {
  moduleDirectories: ["node_modules", __dirname],
  setupFiles: ["<rootDir>/src/test/setEnvVars.js"],
  setupFilesAfterEnv: ["<rootDir>/src/test/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["<rootDir>/src/components/ui/"],
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig)
