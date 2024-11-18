const fuente = 'src';

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
	/*  return {
    dir:
      input:"11tyCode",
      output:"web",
     } */
  // Configure Eleventy
  eleventyConfig.addPassthroughCopy(`${fuente}/css/estilos.css`);
  //NORMALIZE.CSS
  eleventyConfig.addPassthroughCopy('node_modules/normalize.css/normalize.css');
  //KATEX
  eleventyConfig.addPassthroughCopy('node_modules/katex');

  eleventyConfig.addPassthroughCopy('src');
  //PLUGIN HtmlBASE
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
}

