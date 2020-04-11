import { frontMatter as articles } from "./*.mdx";
import Link from "next/link";

function ArticlesPage() {
  const formatPath = (p) => p.replace(/\.mdx$/, "");

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.__resourcePath}>
          <Link href={formatPath(article.__resourcePath)}>
            <a>{article.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArticlesPage;
