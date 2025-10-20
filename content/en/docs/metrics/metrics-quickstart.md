---
title: "Metrics Quickstart"
linkTitle: "Metrics Quickstart"
weight: 1
toc: true
description: >
  Set up essential CD metrics in one day and start improving delivery performance
tags: ["Metrics", "Getting Started", "CD"]
---

{{% pageinfo %}}
This guide helps you quickly implement the minimum set of metrics needed to measure and improve your Continuous Delivery performance. Start tracking today, improve tomorrow.
{{% /pageinfo %}}

## Why Metrics Matter

{{< figure src="/images/Goodharts-law.jpg" title="Goodhart's Law" width="50%" >}}

**Without metrics, improvement is guesswork.**

Metrics help you:
- ✅ **Identify bottlenecks** in your delivery process
- ✅ **Measure improvement** over time
- ✅ **Make data-driven decisions** about where to focus
- ✅ **Demonstrate value** to leadership
- ✅ **Prevent regression** when optimizing

{{% alert title="Critical" color="warning" %}}
**Use metrics in groups, never alone.** Optimizing a single metric leads to unintended consequences. Always use offsetting metrics to maintain balance.
{{% /alert %}}

## The Essential Four Metrics

Start with these four DORA metrics that predict delivery performance:

| Metric | Good Target | Purpose |
|--------|------------|---------|
| [Development Cycle Time](/docs/metrics/development-cycle-time) | < 2 days | Measure delivery speed |
| [Deployment Frequency](/docs/metrics/release-frequency) | Multiple/day | Measure delivery throughput |
| [Change Failure Rate](/docs/metrics/change-fail-rate) | < 5% | Measure quality |
| [Mean Time to Repair](/docs/metrics/mean-time-to-repair) | < 1 hour | Measure recovery speed |

These four metrics balance **speed** (cycle time, deployment frequency) with **stability** (change failure rate, MTTR).

## Day 1: Start Tracking

### Step 1: Deployment Frequency (15 minutes)

**What it measures:** How often you deploy to production

**Simplest implementation:**

```bash
# Add to your deployment script
#!/bin/bash
# deploy.sh

DEPLOY_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
SERVICE_NAME="my-service"

# Your deployment logic here
kubectl apply -f deployment.yaml

# Log the deployment
echo "${DEPLOY_TIME},${SERVICE_NAME},${VERSION}" >> /var/log/deployments.csv

# Or send to metrics service
curl -X POST https://metrics.example.com/deployments \
  -d "{\"service\":\"${SERVICE_NAME}\",\"timestamp\":\"${DEPLOY_TIME}\",\"version\":\"${VERSION}\"}"
```

**Query deployment frequency:**

```bash
# Deployments per day (last 30 days)
cat /var/log/deployments.csv | \
  awk -F',' '{print $1}' | \
  cut -d'T' -f1 | \
  sort | uniq -c | \
  awk '{total+=$1; count++} END {print total/count " deployments/day"}'
```

### Step 2: Development Cycle Time (20 minutes)

**What it measures:** Time from starting work to deploying to production

**Track using git commits + deployment log:**

```bash
# cycle-time.sh
#!/bin/bash

# Get commits from last deployment to now
LAST_DEPLOY_TIME=$(tail -1 /var/log/deployments.csv | cut -d',' -f1)

# For each commit since last deploy
git log --since="$LAST_DEPLOY_TIME" --format="%H|%ct|%s" | while IFS='|' read hash timestamp message; do
  # Extract story ID from commit message (e.g., JIRA-123)
  STORY_ID=$(echo "$message" | grep -oE '[A-Z]+-[0-9]+' | head -1)

  if [ -n "$STORY_ID" ]; then
    # Find when story was started (first commit with this ID)
    STARTED=$(git log --all --grep="$STORY_ID" --format="%ct" --reverse | head -1)
    CYCLE_TIME=$(( (timestamp - STARTED) / 3600 )) # hours

    echo "${STORY_ID},${CYCLE_TIME}"
  fi
done
```

**Alternative: Track in your issue tracker**

Most teams find it easier to track cycle time in Jira/GitHub Issues:

```javascript
// Calculate cycle time from issue status transitions
const cycleTime = (issue) => {
  const startedAt = issue.transitions.find(t => t.to === 'In Progress').timestamp;
  const deployedAt = issue.transitions.find(t => t.to === 'Done').timestamp;

  const hours = (deployedAt - startedAt) / (1000 * 60 * 60);
  return hours / 24; // Convert to days
};
```

See [Development Cycle Time](/docs/metrics/development-cycle-time) for detailed implementation.

### Step 3: Change Failure Rate (10 minutes)

**What it measures:** Percentage of deployments that require remediation

**Simple tracking:**

```bash
# Mark deployment as success or failure
#!/bin/bash
# deploy.sh (updated)

DEPLOY_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
VERSION=${1}
SUCCESS=${2:-true}  # Pass 'false' if deployment failed

echo "${DEPLOY_TIME},${VERSION},${SUCCESS}" >> /var/log/deployments.csv

# Calculate failure rate
total=$(wc -l < /var/log/deployments.csv)
failures=$(grep ",false$" /var/log/deployments.csv | wc -l)
echo "Change Failure Rate: $(awk "BEGIN {printf \"%.1f%%\", ($failures/$total)*100}")"
```

**What counts as a failure:**
- Deployment rollback
- Hotfix deployed within 24 hours
- Production incident caused by the change
- Manual intervention required

See [Change Failure Rate](/docs/metrics/change-fail-rate) for detailed guidance.

### Step 4: Mean Time to Repair (10 minutes)

**What it measures:** How long it takes to restore service after an incident

**Simple incident tracking:**

```csv
# /var/log/incidents.csv
timestamp,service,severity,detected_at,resolved_at,mttr_minutes
2025-10-20T10:00:00Z,api,high,2025-10-20T10:00:00Z,2025-10-20T10:45:00Z,45
2025-10-20T15:30:00Z,web,medium,2025-10-20T15:30:00Z,2025-10-20T15:50:00Z,20
```

**Calculate MTTR:**

```bash
# Average time to repair (last 30 days)
cat /var/log/incidents.csv | tail -n +2 | \
  awk -F',' '{total+=$6; count++} END {print total/count " minutes (avg)"}'
```

**Better: Integrate with incident management**

```javascript
// PagerDuty, Opsgenie, etc.
const mttr = (incident) => {
  const detected = new Date(incident.created_at);
  const resolved = new Date(incident.resolved_at);
  return (resolved - detected) / (1000 * 60); // minutes
};
```

See [Mean Time to Repair](/docs/metrics/mean-time-to-repair) for recovery strategies.

## End of Day 1: You're Tracking!

After one day, you should have:
- ✅ Deployment frequency logging
- ✅ Cycle time calculation (even if manual)
- ✅ Change failure tracking
- ✅ MTTR measurement

**Calculate your baseline:**

```bash
Baseline Metrics (Week of [DATE])

Deployment Frequency: _____ deployments/day
Development Cycle Time: _____ days (average)
Change Failure Rate: _____%
Mean Time to Repair: _____ minutes
```

## Week 1: Make Metrics Visible

### Create a Metrics Dashboard

**Option 1: Simple Spreadsheet** (30 minutes)

Create a Google Sheet or Excel file:

| Week | Deployments | Avg Cycle Time (days) | Change Failures | MTTR (min) |
|------|------------|---------------------|----------------|------------|
| 2025-W42 | 23 | 3.2 | 8.7% | 127 |
| 2025-W43 | 31 | 2.8 | 6.5% | 89 |
| 2025-W44 | 28 | 2.5 | 4.3% | 62 |

**Update weekly** and display prominently (print and post, or share link).

**Option 2: Grafana Dashboard** (2 hours)

```yaml
# docker-compose.yml
version: '3'
services:
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - ./grafana-data:/var/lib/grafana
      - ./dashboards:/etc/grafana/provisioning/dashboards

  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
```

**Push metrics to Prometheus:**

```javascript
// metrics.js
const client = require('prom-client');

const deploymentCounter = new client.Counter({
  name: 'deployments_total',
  help: 'Total number of deployments',
  labelNames: ['service', 'environment']
});

const cycleTimeHistogram = new client.Histogram({
  name: 'development_cycle_time_hours',
  help: 'Development cycle time in hours',
  buckets: [2, 4, 8, 16, 24, 48, 96, 168] // hours
});

const changeFailureCounter = new client.Counter({
  name: 'change_failures_total',
  help: 'Number of failed changes',
  labelNames: ['service']
});

// Record metrics
deploymentCounter.inc({ service: 'api', environment: 'production' });
cycleTimeHistogram.observe(18.5); // 18.5 hours
changeFailureCounter.inc({ service: 'web' });
```

**Option 3: Cloud Service** (1 hour)

Use a hosted metrics service:
- **Datadog** - Application monitoring
- **New Relic** - Full-stack observability
- **CloudWatch** - AWS native
- **Azure Monitor** - Azure native
- **Google Cloud Monitoring** - GCP native

Example with Datadog:

```bash
# Send metric via API
curl -X POST "https://api.datadoghq.com/api/v1/series" \
  -H "Content-Type: application/json" \
  -H "DD-API-KEY: ${DD_API_KEY}" \
  -d '{
    "series": [{
      "metric": "deployment.frequency",
      "type": "count",
      "points": [['$(date +%s)', 1]],
      "tags": ["service:api","env:production"]
    }]
  }'
```

## Week 2: Add Supporting Metrics

Once the four essentials are stable, add these supporting metrics:

### Integration Frequency

**What it measures:** How often code is integrated to trunk

```bash
# Integrations per day
git log --since="30 days ago" --format="%cd" --date=short origin/main | \
  sort | uniq -c | \
  awk '{total+=$1; count++} END {print total/count " integrations/day"}'
```

**Target:** Multiple times per day per developer

See [Integration Frequency](/docs/metrics/integration-frequency).

### Build Duration

**What it measures:** Time from commit to deployable artifact

```bash
# Extract from CI logs
# GitHub Actions example:
gh run list --limit 100 --json conclusion,createdAt,updatedAt | \
  jq -r '.[] | select(.conclusion=="success") |
    [.createdAt, .updatedAt] | @csv' | \
  awk -F',' '{
    start = mktime(gensub(/[:-]/, " ", "g", substr($1, 1, 19)))
    end = mktime(gensub(/[:-]/, " ", "g", substr($2, 1, 19)))
    print (end - start) / 60
  }' | \
  awk '{total+=$1; count++} END {print total/count " minutes (avg)"}'
```

**Target:** < 10 minutes

See [Build Duration](/docs/metrics/build-duration).

### Work In Progress (WIP)

**What it measures:** Number of items in progress simultaneously

Track from your kanban board:

```bash
# Jira JQL
"status" = "In Progress" AND "assignee" is not EMPTY
```

**Target:** WIP < Team Size (ideally half)

See [Work In Progress](/docs/metrics/work-in-progress).

## Metric Groups: Use Together

{{% alert title="Goodhart's Law" color="warning" %}}
"When a measure becomes a target, it ceases to be a good measure."
{{% /alert %}}

**Never optimize a single metric.** Use offsetting groups:

### Speed vs. Quality Group

| Speed Metrics | Quality Metrics |
|--------------|----------------|
| Deployment Frequency ⬆️ | Change Failure Rate ⬇️ |
| Cycle Time ⬇️ | Defect Rate ⬇️ |

**Example:** If you increase deployment frequency but change failure rate also increases, you're going too fast. Slow down and improve quality feedback.

### Flow vs. WIP Group

| Flow Metrics | Constraint Metrics |
|--------------|-------------------|
| Throughput ⬆️ | WIP ⬇️ |
| Velocity ⬆️ | Lead Time ⬇️ |

**Example:** High velocity with high WIP means you're starting too much work. Reduce WIP to improve flow.

See [Metrics Cheat Sheet](/docs/metrics/metrics-cheat-sheet) for comprehensive metric relationships.

## Analyzing Your Metrics

### Week 1: Establish Baseline

Don't change anything. Just measure.

```
Week 1 Baseline:
- Deployment Frequency: 5/week
- Cycle Time: 4.2 days
- Change Failure Rate: 12%
- MTTR: 180 minutes
```

### Week 2-4: Identify Bottlenecks

Look for patterns:

**High Cycle Time + Low Deployment Frequency = Batch Size Problem**
- Solution: [Story Slicing](/docs/work-decomposition/story-slicing)

**High Change Failure Rate = Quality Feedback Problem**
- Solution: [Improve Testing](/docs/testing/testing-quickstart)

**High MTTR = Recovery Process Problem**
- Solution: Automate rollback, improve monitoring

**High WIP + Low Velocity = Context Switching Problem**
- Solution: [Limit WIP](/docs/workflow-management/limiting-wip)

### Month 2+: Continuous Improvement

Set improvement targets:

```
Month 1 Target (achievable):
- Deployment Frequency: 10/week (+100%)
- Cycle Time: 3.0 days (-30%)
- Change Failure Rate: 8% (-33%)
- MTTR: 120 minutes (-33%)

Month 3 Target (stretch):
- Deployment Frequency: Daily
- Cycle Time: < 2 days
- Change Failure Rate: < 5%
- MTTR: < 60 minutes
```

## Common Pitfalls

### ❌ Pitfall 1: Gaming the Metrics

**Example:** Moving tickets to "Done" before actually deploying

**Solution:**
- Definition of Done must include "deployed to production"
- Automate metric collection from deployment logs, not issue tracker

### ❌ Pitfall 2: Vanity Metrics

**Example:** "We deployed 100 times this month!" (but 20 were rollbacks)

**Solution:**
- Always pair speed metrics with quality metrics
- Track both successes and failures

### ❌ Pitfall 3: Metric Theater

**Example:** Spending more time tracking metrics than improving

**Solution:**
- Automate data collection
- Review metrics weekly, not daily
- Focus on trends, not point-in-time values

### ❌ Pitfall 4: Using Metrics as Punishment

**Example:** "Bob's change had a failure, Bob is a bad developer"

**Solution:**
- Metrics measure the **system**, not individuals
- Use metrics to identify process problems, not blame people
- Celebrate improvements, not perfection

## Advanced Metrics (Month 2+)

Once the essentials are stable, consider:

### Quality Metrics
- [Code Coverage](/docs/metrics/code-coverage) - But don't target 100%
- [Defect Rate](/docs/metrics/defect-rate) - Production bugs per release
- [Code Inventory](/docs/metrics/code-inventory) - Undeployed code

### Flow Metrics
- [Lead Time](/docs/metrics/lead-time) - Idea to production
- [Velocity](/docs/metrics/velocity) - Work completed per sprint
- [Average Build Downtime](/docs/metrics/average-build-downtime) - CI availability

## Metric Automation Tools

### Open Source
- **Grafana** + **Prometheus** - Visualization + metrics
- **Loki** - Log aggregation
- **Elasticsearch** + **Kibana** - Search and analytics
- **Graphite** - Time series database

### Commercial
- **Datadog** - Full-stack observability
- **New Relic** - Application performance
- **Splunk** - Log analysis and metrics
- **LinearB** - Engineering metrics platform
- **Sleuth** - Deployment tracking

### CI/CD Native
- **GitHub Insights** - Built into GitHub
- **GitLab Analytics** - Built into GitLab
- **Azure DevOps Analytics** - Built into Azure DevOps
- **CircleCI Insights** - Built into CircleCI

## Sample Implementation: Complete Script

Here's a complete bash script to get started:

```bash
#!/bin/bash
# metrics-collector.sh - Run daily via cron

METRICS_FILE="/var/log/cd-metrics.csv"
TODAY=$(date +%Y-%m-%d)

# 1. Deployment Frequency (today)
DEPLOYMENTS_TODAY=$(grep "^${TODAY}" /var/log/deployments.csv | wc -l)

# 2. Average Cycle Time (last 7 days)
CYCLE_TIME=$(tail -50 /var/log/cycle-times.csv | \
  awk -F',' '{total+=$2; count++} END {print total/count}')

# 3. Change Failure Rate (last 30 days)
TOTAL=$(tail -200 /var/log/deployments.csv | wc -l)
FAILURES=$(tail -200 /var/log/deployments.csv | grep ",false$" | wc -l)
CFR=$(awk "BEGIN {printf \"%.1f\", ($FAILURES/$TOTAL)*100}")

# 4. Mean Time to Repair (last 30 days)
MTTR=$(tail -50 /var/log/incidents.csv | \
  awk -F',' 'NR>1 {total+=$6; count++} END {print total/count}')

# Write to metrics file
echo "${TODAY},${DEPLOYMENTS_TODAY},${CYCLE_TIME},${CFR},${MTTR}" >> "$METRICS_FILE"

# Generate report
cat <<EOF
📊 CD Metrics Report - ${TODAY}

Deployment Frequency: ${DEPLOYMENTS_TODAY} deployments today
Avg Cycle Time: ${CYCLE_TIME} days
Change Failure Rate: ${CFR}%
Mean Time to Repair: ${MTTR} minutes

View full report: https://metrics.example.com/dashboard
EOF
```

**Set up daily collection:**

```bash
# Add to crontab
crontab -e

# Run daily at 11:59 PM
59 23 * * * /usr/local/bin/metrics-collector.sh
```

## Success Criteria

After implementing metrics, you should have:

✅ **All four DORA metrics tracked** automatically
✅ **Baseline established** (1 week of data)
✅ **Dashboard visible** to the entire team
✅ **Weekly review** scheduled
✅ **Improvement targets** defined
✅ **Metric groups** balanced (speed + quality)

## Next Steps

1. **Automate collection** - Stop manual tracking
2. **Add visualizations** - Trend lines, not just numbers
3. **Set up alerts** - Get notified when metrics degrade
4. **Correlate metrics** - Find relationships between metrics
5. **Share widely** - Make metrics visible to stakeholders

## Further Reading

- [Metrics Overview](/docs/metrics) - Complete metrics catalog
- [Metrics Cheat Sheet](/docs/metrics/metrics-cheat-sheet) - Quick reference guide
- [Development Cycle Time](/docs/metrics/development-cycle-time) - Detailed implementation
- [Change Fail Rate](/docs/metrics/change-fail-rate) - Measuring quality
- [Quality Metrics](/docs/metrics/quality) - Comprehensive quality measures
- [Accelerate Book](https://learning.oreilly.com/library/view/accelerate/9781457191435/) - Research behind DORA metrics

---

{{% alert title="Remember" color="primary" %}}
**Metrics are a means, not an end.** The goal is to improve delivery performance, not to hit specific metric targets. Use metrics to guide improvement, celebrate progress, and maintain focus on outcomes.
{{% /alert %}}
