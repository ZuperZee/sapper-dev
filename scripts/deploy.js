const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/svelte-dev",
  {
    branch: "master",
    repo: "https://github.com/ZuperZee/sapper-dev.git",
    user: {
      name: "ZuperZee",
      email: "zuperpenguin@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
