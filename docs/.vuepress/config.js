


module.exports = {
  title: 'Workshop Wiki',
  description: 'The best place to learn how to make Workshop modes!',

  palette: {
		$accentColor: '#e8bc6d',
	},

  // You can omit the .md extension, and paths ending with / are inferred as */README.md
  // The text for the link is automatically inferred (either from the first header in the
  // page or explicit title in YAML front matter). To explicitly specify the link text,
  // use an array in form of [link, text].
  themeConfig: {
    logo: '/boosticker.png',
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'WorkshopCodes', link: 'https://workshopcodes.com/', target: '_blank' },
      {
        text: 'Wiki',
        items: [
          { text: 'Workshop Wiki', items: [
            { text: 'I found a mistake', link: '/mistake' },
            { text: 'Report an issue', link: '/issue' },
            { text: 'I want to add something', link: '/contribute' },
          ] },
          { text: 'Resources', items: [
            { text: 'WorkshopCodes.com', link: 'https://workshopcodes.com/' },
          ] }
        ]
      },
    ],
    sidebar: [
      ['/', 'Home'],
      {
        title: 'Workshop Guides',   // required
        path: '/guides/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'guides/',
          'guides/help',
        ]
      },
    ],
    // displayAllHeaders: true,
  }
}