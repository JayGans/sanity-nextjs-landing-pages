export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61dc23f048a39c7e1d746d47',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vspixvya',
                  apiId: '1b384200-a1c5-4d8e-a394-ff3055fdcbfc'
                },
                {
                  buildHookId: '61dc23f0bb5c3da0191542af',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-typ4px5t',
                  apiId: 'c3a9f9ad-94c6-4887-b131-0e4ab541e2d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JayGans/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-typ4px5t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
