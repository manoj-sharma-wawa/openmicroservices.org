module.exports = {
  title: 'Microservice.Guide',
  description: 'The open standard for resusable microservices.',
  ga: 'UA-119018759-1',
  themeConfig: {
    repo: 'microservice.guide/microservice.guide',
    repoLabel: 'Edit in GitHub',
    editLinkText: 'Edit in GitHub',
    editLinks: true,
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '/overview/',
          '/commands/',
          '/interface/',
          '/environment/',
          '/volumes/',
          '/metrics/',
          '/logs/',
          '/requirements/',
          '/health/',
          '/scaling/',
          '/lifecycle/',
          '/capacities/'
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/http/'
        ]
      }
    ]
  }
}
