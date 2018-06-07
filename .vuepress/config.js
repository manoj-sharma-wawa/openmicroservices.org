module.exports = {
  title: 'Microservice.Guide',
  description: 'The open standard for resusable microservices.',
  ga: 'UA-119018759-1',
  themeConfig: {
    repo: 'microservice/microservice.guide',
    repoLabel: 'Edit in GitHub',
    editLinkText: 'Edit in GitHub',
    editLinks: true,
    sidebar: [
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '/overview/',
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
          '/scaling/',
          '/lifecycle/',
          '/capabilities/'
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
