# next.js tutorial

Implemented most of the Basic level steps of the next.js tutorial. I then wanted to host the application on GitHub Pages.

But because [nextjs doesn't support relative paths or base paths](https://github.com/zeit/next.js/issues/4998) at the time of making this, I had to implement a custom solution to solve the routing issue. I created a custom component that performs the adjustment to the Link generation. This seemed to be the preferred workaround per discussion on GitHub.

You can view the application [here](https://alexmj212.dev/nextjs-tutorial/)
