import type { Config } from "jest";

//  const baseConfig = "<rootDir>/src/app/passwordChecker/"
//  const baseDirConfig = "<rootDir>/src/app/test/PassChecker"  
 
 const baseConfig = "<rootDir>/src/app"
 const baseDirConfig = "<rootDir>/test"  


const config:Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseConfig}/**/*.{js,ts}`
    ],
    testMatch: [
       `${baseDirConfig}/**/*.{js,ts}`
    ]
}

export default config