---
title: "Testing Quickstart"
linkTitle: "Testing Quickstart"
weight: 1
toc: true
description: >
  Get your test suite to production-ready in one week
tags: ["Testing", "Getting Started", "CI"]
---

{{% pageinfo %}}
A practical guide to building a fast, reliable test suite that gives confidence without slowing down delivery. Focus on deterministic tests that run in CI and provide rapid feedback.
{{% /pageinfo %}}

## The Goal

Build a test suite that:
- ✅ Runs in **under 10 minutes**
- ✅ Is **deterministic** (same result every time)
- ✅ Catches real bugs **before production**
- ✅ Provides **fast feedback** to developers
- ✅ Doesn't require heroic maintenance

## Before You Begin

### The Anti-Pattern to Avoid

{{< figure src="/images/testing-images/ice-cream-cones-software-testing.png" title="Ice Cream Cone Anti-Pattern" width="50%" >}}

**Ice Cream Cone Testing** = Lots of slow, fragile E2E tests, minimal fast unit/integration tests

**Why this fails:**
- E2E tests are slow (minutes per test)
- E2E tests are non-deterministic (flaky)
- Debugging E2E failures is time-consuming
- Developers stop trusting the tests

### The Right Pattern

Most tests should be **integration tests** - fast, deterministic, testing real interactions without external dependencies.

See [Test Patterns](/docs/testing) for the full testing matrix.

## Week 1 Action Plan

### Day 1: Audit Your Current Tests

**Action: Categorize and time your existing tests**

```bash
# Run your test suite and capture metrics
npm test -- --verbose --timing

# or
mvn test -DreportFormat=plain
```

**Create a test inventory:**

```shell
Test Inventory

Unit Tests:
  Count: _____
  Time: _____ seconds
  Failures (last week): _____

Integration Tests:
  Count: _____
  Time: _____ seconds
  Failures (last week): _____

E2E Tests:
  Count: _____
  Time: _____ minutes
  Failures (last week): _____

Total CI Time: _____ minutes
Flaky test rate: _____%
```

**Red flags:**
- 🚩 Total CI time > 10 minutes
- 🚩 Flaky test rate > 1%
- 🚩 More E2E tests than integration tests
- 🚩 Tests that require deployed environments

### Day 2: Fix or Delete Flaky Tests

**Action: Zero tolerance for non-deterministic tests**

Flaky tests destroy confidence. They must be fixed immediately or deleted.

**Identify flaky tests:**
```bash
# Run tests 10 times, capture failures
for i in {1..10}; do
  npm test 2>&1 | tee test-run-$i.log
done

# Analyze failures
grep "FAIL" test-run-*.log | sort | uniq -c
```

**Common causes of flakiness:**

| Cause | Solution |
|-------|----------|
| Network calls to external services | Use [test doubles](/docs/testing/test-doubles) |
| Database state from previous tests | Reset DB between tests or use transactions |
| Timing/race conditions | Use deterministic time, avoid `sleep()` |
| Shared mutable state | Isolate test data |
| Async operations without proper waiting | Use proper async test patterns |

{{% alert title="Rule" color="warning" %}}
**If a test can't be made deterministic in 1 hour, delete it.** It's better to have no test than a test you can't trust.
{{% /alert %}}

### Day 3: Write Your First Integration Test

Integration tests are your highest-value tests. They test real component interactions without external dependencies.

**Example: API Integration Test (Node.js)**

```javascript
// tests/integration/user-api.test.js
const request = require('supertest');
const app = require('../../src/app');
const { setupTestDB, teardownTestDB } = require('../helpers/db');

describe('User API', () => {
  beforeAll(async () => {
    await setupTestDB(); // In-memory or test DB
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  describe('POST /api/users', () => {
    it('creates a new user with valid data', async () => {
      const response = await request(app)
        .post('/api/users')
        .send({
          username: 'testuser',
          email: 'test@example.com'
        })
        .expect(201);

      expect(response.body).toMatchObject({
        id: expect.any(Number),
        username: 'testuser',
        email: 'test@example.com'
      });

      // Verify in database
      const user = await User.findById(response.body.id);
      expect(user.username).toBe('testuser');
    });

    it('rejects invalid email addresses', async () => {
      await request(app)
        .post('/api/users')
        .send({
          username: 'testuser',
          email: 'not-an-email'
        })
        .expect(400);
    });

    it('prevents duplicate usernames', async () => {
      // Create first user
      await request(app)
        .post('/api/users')
        .send({ username: 'duplicate', email: 'first@example.com' })
        .expect(201);

      // Attempt duplicate
      await request(app)
        .post('/api/users')
        .send({ username: 'duplicate', email: 'second@example.com' })
        .expect(409); // Conflict
    });
  });
});
```

**Key characteristics:**
- ✅ **Deterministic** - Same input = same output
- ✅ **Fast** - Runs in milliseconds
- ✅ **Isolated** - Uses test database
- ✅ **Complete** - Tests happy path and errors
- ✅ **Real** - Uses actual components, not mocks

See [Integration Testing](/docs/testing/integration) for patterns in other languages.

### Day 4: Implement Test Doubles for External Services

**Action: Mock external dependencies**

External services (APIs, payment gateways, email, etc.) make tests slow and non-deterministic.

**Example: Testing with External API**

```javascript
// tests/integration/payment-service.test.js
const nock = require('nock'); // HTTP mocking library
const PaymentService = require('../../src/services/payment');

describe('PaymentService', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('processes successful payment', async () => {
    // Mock the external payment API
    nock('https://api.payment-provider.com')
      .post('/charges')
      .reply(200, {
        id: 'ch_123',
        status: 'succeeded',
        amount: 1000
      });

    const service = new PaymentService();
    const result = await service.charge({
      amount: 1000,
      currency: 'usd',
      source: 'tok_visa'
    });

    expect(result.status).toBe('succeeded');
    expect(result.chargeId).toBe('ch_123');
  });

  it('handles payment API failures gracefully', async () => {
    // Mock API failure
    nock('https://api.payment-provider.com')
      .post('/charges')
      .reply(402, {
        error: 'insufficient_funds'
      });

    const service = new PaymentService();

    await expect(
      service.charge({ amount: 1000, source: 'tok_visa' })
    ).rejects.toThrow('Payment failed: insufficient_funds');
  });

  it('retries on network errors', async () => {
    // Mock network error then success
    nock('https://api.payment-provider.com')
      .post('/charges')
      .replyWithError('ECONNREFUSED')
      .post('/charges')
      .reply(200, { id: 'ch_123', status: 'succeeded' });

    const service = new PaymentService({ retries: 1 });
    const result = await service.charge({ amount: 1000, source: 'tok_visa' });

    expect(result.status).toBe('succeeded');
  });
});
```

**Test Double Types:**

- **Stub** - Returns canned responses (use for queries)
- **Mock** - Verifies interactions (use sparingly)
- **Fake** - Working implementation (e.g., in-memory database)

See [Test Doubles](/docs/testing/test-doubles) for detailed patterns.

### Day 5: Reduce E2E Test Count

**Action: Convert E2E tests to integration tests**

E2E tests should only cover:
1. Critical user paths (login, checkout, etc.)
2. Scenarios that absolutely require a browser
3. Integration between major system components

**Before: E2E Test (Slow, Flaky)**
```javascript
// Takes 30 seconds, requires browser + full stack
test('user can update profile', async () => {
  await page.goto('http://localhost:3000/login');
  await page.fill('[name=email]', 'user@example.com');
  await page.fill('[name=password]', 'password123');
  await page.click('button[type=submit]');
  await page.waitForNavigation();

  await page.goto('http://localhost:3000/profile');
  await page.fill('[name=displayName]', 'New Name');
  await page.click('button:has-text("Save")');
  await page.waitForSelector('.success-message');

  expect(await page.textContent('.display-name')).toBe('New Name');
});
```

**After: Integration Test (Fast, Reliable)**
```javascript
// Takes 50ms, no browser needed
test('user can update profile', async () => {
  // Arrange: Create authenticated user
  const user = await createTestUser({ email: 'user@example.com' });
  const token = generateAuthToken(user.id);

  // Act: Update profile
  const response = await request(app)
    .put('/api/users/me')
    .set('Authorization', `Bearer ${token}`)
    .send({ displayName: 'New Name' })
    .expect(200);

  // Assert
  expect(response.body.displayName).toBe('New Name');

  // Verify in database
  const updatedUser = await User.findById(user.id);
  expect(updatedUser.displayName).toBe('New Name');
});
```

**Savings:**
- 🚀 **30 seconds → 50ms** (600x faster)
- ✅ **Deterministic** (no browser timing issues)
- 🔧 **Easier to debug** (no UI layer)

## Week 1 Results

After 5 days, you should have:

✅ **Test inventory** completed
✅ **Zero flaky tests** (fixed or deleted)
✅ **5-10 new integration tests** covering critical paths
✅ **External dependencies mocked** using test doubles
✅ **E2E tests reduced** to < 5 critical scenarios
✅ **CI time reduced** (target: < 10 minutes)

## Test-Driven Development (TDD)

Once you have a solid test foundation, consider TDD:

**The Red-Green-Refactor Cycle:**

```shell
1. 🔴 Red: Write a failing test
   - Write the test first
   - Run it, watch it fail
   - Confirm the failure message makes sense

2. 🟢 Green: Make it pass
   - Write the minimal code to pass
   - Don't worry about perfection
   - Get to green quickly

3. ♻️ Refactor: Improve the code
   - Tests passing? Now improve the design
   - Extract methods, rename variables
   - Tests should still pass
```

**Example TDD Flow:**

```javascript
// 1. RED: Write failing test
test('calculates discount for VIP customers', () => {
  const order = new Order({ customerId: 'vip-123', total: 100 });
  expect(order.finalPrice()).toBe(90); // 10% discount
}); // FAILS - method doesn't exist

// 2. GREEN: Minimum code to pass
class Order {
  finalPrice() {
    return this.total * 0.9; // Hardcoded, but passes!
  }
}

// 3. REFACTOR: Add more tests, improve design
test('no discount for regular customers', () => {
  const order = new Order({ customerId: 'reg-456', total: 100 });
  expect(order.finalPrice()).toBe(100);
}); // FAILS

// Refactor to handle both cases
class Order {
  finalPrice() {
    const customer = Customer.findById(this.customerId);
    const discount = customer.isVIP ? 0.1 : 0;
    return this.total * (1 - discount);
  }
}
```

See [TDD Resources](/docs/_index.md#test-driven-development) for learning materials.

## Testing Matrix Reference

Use this matrix to determine where each test belongs:

| Test Type | Deterministic | Network | Database | Speed | % of Suite |
|-----------|--------------|---------|----------|-------|------------|
| [Static](/docs/testing/static) | Yes | No | No | Instant | 100% |
| [Unit](/docs/testing/unit) | Yes | No | No | < 10ms | 20% |
| [Integration](/docs/testing/integration) | Yes | localhost | test DB | < 100ms | 70% |
| [Contract](/docs/testing/contract) | No* | Yes | - | < 1s | 5% |
| [Functional](/docs/testing/functional) | Yes | localhost | test DB | < 500ms | 4% |
| [E2E](/docs/testing/e2e) | No | Yes | Yes | seconds | 1% |

*Contract tests run against live services but don't break the build

## Common Patterns by Language

### JavaScript/TypeScript
- **Framework:** Jest, Vitest, or Mocha
- **Integration:** Supertest (HTTP), Testcontainers (DB)
- **Mocking:** Nock (HTTP), MSW (browser)
- **E2E:** Playwright, Cypress

### Java
- **Framework:** JUnit 5, TestNG
- **Integration:** Spring Test, Testcontainers
- **Mocking:** Mockito, WireMock
- **E2E:** Selenium, RestAssured

### Python
- **Framework:** pytest, unittest
- **Integration:** pytest-flask, pytest-django
- **Mocking:** pytest-mock, responses
- **E2E:** Selenium, Playwright

### Go
- **Framework:** Built-in `testing` package
- **Integration:** httptest (stdlib), dockertest
- **Mocking:** gomock, testify/mock
- **E2E:** Selenium, chromedp

### C# / .NET
- **Framework:** xUnit, NUnit, MSTest
- **Integration:** WebApplicationFactory, Testcontainers
- **Mocking:** Moq, NSubstitute
- **E2E:** Selenium, Playwright

## Troubleshooting

### "Our tests are still taking 15 minutes!"

**Diagnose:**
```bash
# Find slowest tests
npm test -- --verbose | grep "PASS\|FAIL" | sort -k4 -n -r | head -20
```

**Common fixes:**
- Run tests in parallel (`npm test -- --maxWorkers=4`)
- Use in-memory database instead of real DB
- Cache dependencies in CI
- Split test suite (fast tests in PR, full suite nightly)

### "Tests pass locally but fail in CI"

**Common causes:**
- Timing differences (use deterministic time mocking)
- Environment differences (port conflicts, missing env vars)
- Test order dependency (tests should be independent)
- Race conditions (use proper async handling)

**Fix:**
```javascript
// BAD: Timing-dependent
test('displays message after delay', async () => {
  showMessage();
  await new Promise(resolve => setTimeout(resolve, 1000));
  expect(getMessage()).toBe('Hello');
});

// GOOD: Wait for condition
test('displays message after delay', async () => {
  showMessage();
  await waitFor(() => expect(getMessage()).toBe('Hello'));
});
```

### "Developers skip tests because they're too slow"

**Reality:** If tests slow down development, they'll be skipped or removed.

**Solutions:**
1. **Speed up tests** (see above)
2. **Run subset locally** (fast tests only)
3. **Parallel execution**
4. **Watch mode** (only run changed tests)

```bash
# Fast feedback loop
npm test -- --watch --changedSince=main
```

## Best Practices Summary

✅ **DO:**
- Write integration tests for most scenarios
- Make tests deterministic
- Keep CI under 10 minutes
- Test behavior, not implementation
- Use descriptive test names
- Fail fast (exit on first error)

❌ **DON'T:**
- Keep flaky tests
- Test private methods directly
- Use sleep/wait for arbitrary time
- Share test data between tests
- Mock everything (over-mocking)
- Write tests after the code (try TDD!)

See [Testing Best Practices](/docs/testing/best-practices) for comprehensive guidance.

## Next Steps

After establishing your test foundation:

1. **Adopt TDD** - Write tests first for new features
2. **Add contract tests** - Verify API compatibility ([Contract Testing](/docs/testing/contract))
3. **Implement mutation testing** - Verify test quality
4. **Add performance tests** - Catch regressions early
5. **Enable test coverage tracking** - But don't obsess over 100%

## Further Reading

- [Test Patterns Overview](/docs/testing) - Test pyramid, trophy, and ice cream cone
- [Static Testing](/docs/testing/static) - Linting, type checking
- [Unit Testing](/docs/testing/unit) - Testing in isolation
- [Integration Testing](/docs/testing/integration) - Testing component interactions
- [Contract Testing](/docs/testing/contract) - API compatibility testing
- [E2E Testing](/docs/testing/e2e) - Full system testing
- [Test Doubles](/docs/testing/test-doubles) - Mocks, stubs, and fakes

---

{{% alert title="Remember" color="primary" %}}
**The goal of tests is confidence, not coverage.** A small suite of fast, reliable tests that catch real bugs is infinitely better than a large suite of slow, flaky tests that everyone ignores.
{{% /alert %}}
