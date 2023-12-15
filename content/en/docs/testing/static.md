---
title: Static Testing

type: docs
---

> A static test is a test that evaluates non-running code against rules for known good practices to check for security, structure, or practice issues.
>
> -- [Testing Glossary](/docs/testing/glossary#static-test)

Static code analysis has many key purposes.

- It warns of excessive complexity in the code that will degrade the ability to change it safely.
- Identifies issues that could expose vulnerabilities
- Shows anti-patterns that violate good practices
- Alerts to issues with dependencies that may prevent delivery, create a vulnerability, or even expose the company to lawsuits.
- It catches errors

## Principles

- When implementing any test, the test should be designed to provide alerts as close to the moment of creation as possible.
- Static analysis, many scans can be run realtime in IDEs. Others during the build or as a pre-commit scan. Others require tooling that can only be used on the CI server. Whatever the test, drive it left.
- Recheck everything on CI while verifying HEAD

### Types of static tests

- **Linting**: This automates catching of common errors in code and the enforcement of best practices
- **Formatting**: Enforcement of code style rules. It removes subjectivity from code reviews
- **Complexity**: Are code blocks too deep or too long? Complexity causes defects and simple code is better.
- **Type checking**: Type checking can be a key validation to prevent hard to identify defects replacing certain classes of tests and logic otherwise required (e.g. unit tests validating internal APIs)
- **Security**: Checking for known vulnerabilities and coding patterns that provide attack vectors are critical
- **Dependency scanning** :
  - Are your dependencies up to date?
  - Has the dependency been hijacked?
  - Are there known security issues in this version that require immediate resolution?
  - Is it licensed appropriately?

## Recommended Best Practices

- IDE plugins to identify problems in realtime
- Pre-commit hooks to prevent committing problems
- Verification during PR and during the CI build on the HEAD to verify that earlier verification happened and was effective.
- Discourage disabling of static tests (e.g. skipping tests, ignoring warnings, ignoring code on coverage evaluation, etc)
- Write custom rules (lint, formatting, etc) for common code review feedback

## Recommended Tooling

| Platform   | Tools                                                                     |
| ---------- | ------------------------------------------------------------------------- |
| Android    | SonarQube, Lint, ktLink                                                   |
| iOS        | SonarQube, SwiftLint                                                      |
| Web        | **Linter:** eslint<br/>**Formatter:** prettier<br/>**Scanner:** SonarQube |
| Java BE    | Linter/Formatter: sonar, PMD                                              |
| JS/node BE | **Linter:** eslint<br/>**Formatter:** prettier<br/>**Scanner:** SonarQube |
