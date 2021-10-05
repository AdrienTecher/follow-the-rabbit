module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "welcome",
    {
      type: "category",
      label: "Introduction",
      items: [
        {
          type: "autogenerated",
          dirName: "01-introduction",
        },
      ],
    },
    {
      type: "category",
      label: "The basics",
      items: [
        "the-basics/how-to-find-stuff",
        "the-basics/the-terminal",
        {
          type: "category",
          label: "Setting you up for the dev life",
          items: [
            {
              type: "autogenerated",
              dirName: "02-the-basics/03-set-up",
            },
          ],
        },
        "the-basics/intro-to-programming-languages",
        "the-basics/putting-it-all-together",
      ],
    },
    "where-to-start",
    "resources",
  ],
};