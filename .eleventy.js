const BookCard = require('./src/_includes/components/BookCard')

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addShortcode("BookCard", BookCard);

  eleventyConfig.addCollection("books", function(collection) {
    return collection.getFilteredByGlob("src/books/**/*.md");
  });

    return {
      dir: {
        input: 'src',
        includes: '_includes',
        output: '_site',
        data: '_data',
      },
      templateFormats: ['md', 'njk', 'html'],
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
    };
  }