module.exports = {
    pathPrefix: "/workflow-process-service-trial",
    siteMetadata: {
      title: "Installing Workflow Process Service trial",
      description: "",
      keywords: "",
    },
    plugins: [
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          repository: {
            baseURL: 'https://github.ibm.com/workflow-process-service-trial',
            subDirectory: '/',
          },
          name: "Carbon Design Gatsby Theme",
          icon: "src/images/favicon.svg",
          short_name: "Gatsby Theme Carbon",
          start_url: "/",
          background_color: "#ffffff",
          theme_color: "#0062ff",
          display: "browser",
        },
      },
      'gatsby-theme-carbon'
    ],
  };