module.exports = {
  title: 'Open Microservice Guide',
  description: 'The open standard for reusable microservices',
  themeConfig: {
    repo: 'microservices/microservice.guide',
    repoLabel: 'Contribute',
    editLinkText: 'Edit this page on GitHub',
    editLinks: true,
    sidebar: [
      {
        title: 'Overview',
        collapsable: false,
        children: [
          '/overview/',
          '/overview/comparisons/openapi/',
          '/anatomy/'
        ]
      },
      {
        title: 'Schema',
        collapsable: false,
        children: [
          '/lifecycle/',
          '/container/',
          '/commands/',
          '/interface/',
          '/environment/',
          '/volumes/',
          '/authentication/',
          '/metrics/',
          '/logs/',
          '/requirements/',
          '/health/',
          '/scaling/'
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/http/'
        ]
      },
      {
        title: 'CLI',
        collapsable: false,
        children: [
          '/cli/overview/',
          '/cli/validate/',
          '/cli/test/',
          '/cli/debug/'
        ]
      }
    ]
  }
};
