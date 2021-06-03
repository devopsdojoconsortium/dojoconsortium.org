const menu = [
  {
    name: 'Home',
    linkRoute: '/',
    menus: [],
    navPriority: 99,
    key: '/-bd694bf4-239b-4abc-becf-e6beca20efbd',
  },
  {
    name: 'Continuous Delivery',
    linkRoute: '',
    key: 'Continuous Delivery',
    subItems: [
      {
        name: 'Common Blockers',
        linkRoute: '/Continuous Delivery/cd-anti-patterns/',
        menus: ['Continuous Delivery'],
        navPriority: 1,
        key:
          '/Continuous Delivery/cd-anti-patterns/-dad841c0-db2c-4770-8308-e0802c3d19f9',
      },
      {
        name: 'CD Best Practices',
        linkRoute: '/Continuous Delivery/cd-practices/',
        menus: ['Continuous Delivery'],
        navPriority: 99,
        key:
          '/Continuous Delivery/cd-practices/-e30c3e0e-a549-493d-9f3f-569e50be0375',
      },
      {
        name: 'Cloud Native Checklist',
        linkRoute: '/Continuous Delivery/cloud-checklist/',
        menus: ['Continuous Delivery'],
        navPriority: 99,
        key:
          '/Continuous Delivery/cloud-checklist/-3be775e8-2ae1-46de-a463-b47b98a771ca',
      },
      {
        name: 'DORA Recommendations',
        linkRoute: '/Continuous Delivery/dora-recommendations/',
        menus: ['Continuous Delivery'],
        navPriority: 99,
        key:
          '/Continuous Delivery/dora-recommendations/-452af379-1bf4-4149-8d88-1ab7745535bd',
      },
      {
        name: 'Getting Started with CD',
        linkRoute: '/Continuous Delivery/starting-ci-cd/',
        menus: ['Continuous Delivery'],
        navPriority: 99,
        key:
          '/Continuous Delivery/starting-ci-cd/-c15f58b4-050a-42fd-b74d-89eb0e8f26c7',
      },
    ],
  },
  {
    name: 'Glossary',
    linkRoute: '',
    key: 'Glossary',
    subItems: [
      {
        name: 'Definition of Terms',
        linkRoute: '/glossary/',
        menus: ['Glossary'],
        navPriority: 99,
        key: '/glossary/-2d96c926-cd43-4cb9-9ed9-a67296ce6430',
      },
    ],
  },
  {
    name: 'Metrics',
    linkRoute: '',
    key: 'Metrics',
    subItems: [
      {
        name: 'Metrics Cheat Sheet',
        linkRoute: '/metrics/metrics-cheat-sheet/',
        menus: ['Metrics'],
        navPriority: 1,
        key:
          '/metrics/metrics-cheat-sheet/-54ab2a5f-5a83-4cc0-9d2a-f647f93fc010',
      },
      {
        name: 'Average Build Downtime',
        linkRoute: '/metrics/average-build-downtime/',
        menus: ['Metrics'],
        navPriority: 99,
        key:
          '/metrics/average-build-downtime/-ebd0993a-1c0b-4aca-bca4-7f20d8f219b7',
      },
      {
        name: 'Build Cycle Time',
        linkRoute: '/metrics/build-duration/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/build-duration/-882e1b63-dcc2-4474-9156-b440be095671',
      },
      {
        name: 'Change Fail Rate',
        linkRoute: '/metrics/change-fail-rate/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/change-fail-rate/-70af1f80-3083-47b4-954e-d2abe5025dbb',
      },
      {
        name: 'Code Coverage',
        linkRoute: '/metrics/code-coverage/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/code-coverage/-a1c95d54-5897-46c7-a1fb-b97837a2ab8d',
      },
      {
        name: 'Code Integration Frequency',
        linkRoute: '/metrics/integration-frequency/',
        menus: ['Metrics'],
        navPriority: 99,
        key:
          '/metrics/integration-frequency/-8be585cc-2c20-424c-9efa-58a3de48985c',
      },
      {
        name: 'Code Inventory',
        linkRoute: '/metrics/code-inventory/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/code-inventory/-baa1ff9b-774f-4897-a908-1b80e771fe65',
      },
      {
        name: 'Defect Rate',
        linkRoute: '/metrics/defect-rate/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/defect-rate/-93b27abe-b1cc-4975-8eaa-99e21e880dad',
      },
      {
        name: 'Delivery Frequency',
        linkRoute: '/metrics/release-frequency/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/release-frequency/-2698006d-6394-4918-9e10-c537ec124f1d',
      },
      {
        name: 'Development Cycle Time',
        linkRoute: '/metrics/development-cycle-time/',
        menus: ['Metrics'],
        navPriority: 99,
        key:
          '/metrics/development-cycle-time/-8b8d6200-cb8d-44f1-afd7-cd54fe3a331b',
      },
      {
        name: 'Lead Time',
        linkRoute: '/metrics/lead-time/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/lead-time/-378cf590-d065-4068-906f-005876be3f0c',
      },
      {
        name: 'MTTR',
        linkRoute: '/metrics/mean-time-to-repair/',
        menus: ['Metrics'],
        navPriority: 99,
        key:
          '/metrics/mean-time-to-repair/-f6e46f18-1815-498a-8029-c511ec5d8008',
      },
      {
        name: 'Metrics Definitions',
        linkRoute: '/metrics/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/-e0ac09ba-0ec5-40d6-b1dc-f6904cf34772',
      },
      {
        name: 'Quality',
        linkRoute: '/metrics/quality/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/quality/-5986baa3-a85a-4916-93c5-e949993d5b9b',
      },
      {
        name: 'Velocity / Throughput',
        linkRoute: '/metrics/velocity/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/velocity/-3215138d-a9f5-4df8-8e82-86f1b62124f4',
      },
      {
        name: 'WIP',
        linkRoute: '/metrics/work-in-progress/',
        menus: ['Metrics'],
        navPriority: 99,
        key: '/metrics/work-in-progress/-05d7d148-49a0-4d7b-84c0-f5b719db328c',
      },
    ],
  },
]

export default menu
