const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function generateSearchIndex() {
  const pagesDir = path.join(process.cwd(), 'app');
  const searchIndex = [];

  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverseDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.mdx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data, content: fileContent } = matter(content);

        // Extract text content from JSX (this is a simple extraction and might need refinement)
        const textContent = fileContent.replace(/<[^>]+>/g, '');

        searchIndex.push({
          title: data.title || path.basename(filePath, path.extname(filePath)),
          content: textContent,
          url: '/' + path.relative(pagesDir, filePath).replace(/\.(tsx|mdx)$/, ''),
        });
      }
    });
  }

  traverseDirectory(pagesDir);

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'search-index.json'),
    JSON.stringify(searchIndex)
  );

  console.log('Search index generated successfully!');
}

generateSearchIndex();