const codigo = 'fuente';

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
  eleventyConfig.setInputDirectory("fuente");
  eleventyConfig.setOutputDirectory("docs");
  // Configure Eleventy
  eleventyConfig.addPassthroughCopy("fuente/src/css/estilos.css");
  //NORMALIZE.CSS
  eleventyConfig.addPassthroughCopy("node_modules/normalize.css/normalize.css");
  //KATEX
  eleventyConfig.addPassthroughCopy("node_modules/katex");

  eleventyConfig.addPassthroughCopy("fuente/src");
  //PLUGIN HtmlBASE
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
}

