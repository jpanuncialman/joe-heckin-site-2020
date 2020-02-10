export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e40c1b7a6328fb233ab3993',
                  title: 'Sanity Studio',
                  name: 'joe-heckin-site-2020-studio',
                  apiId: '5246d6ea-e304-4cc2-9b5f-4cb0927c0e89'
                },
                {
                  buildHookId: '5e40c1b7e963cd364254f666',
                  title: 'Portfolio Website',
                  name: 'joe-heckin-site-2020',
                  apiId: '3920637b-88a4-43a4-ab86-9bef04391d0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jpanuncialman/joe-heckin-site-2020',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://joe-heckin-site-2020.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
