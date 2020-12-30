// of MDX utilities
// module. = require('@mdx-js/util')

exports.toTemplateLiteral = text => {
  const escaped = text
    .replace(/\\(?!\$)/g, '\\\\') // Escape all "\" to avoid unwanted escaping in text nodes
    // and ignore "\$" since it's already escaped and is common
    // with prettier https://github.com/mdx-js/mdx/issues/606
    .replace(/`/g, '\\`') // Escape "`"" since
    .replace(/(\\\$)/g, '\\$1') // Escape \$ so render it as it is
    .replace(/(\\\$)(\{)/g, '\\$1\\$2') // Escape \${} so render it as it is
    .replace(/\$\{/g, '\\${') // Escape ${} in text so that it doesn't eval

  return '`' + escaped + '`'; // '{`' +  + '`}'
}
