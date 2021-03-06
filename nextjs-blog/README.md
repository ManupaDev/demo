# Dynamic Routes

![](2022-07-17-23-32-05.png)

- we’ll talk about the case where each page path depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables dynamic URLs in Next.js.

![](2022-07-17-23-35-35.png)

```jsx
import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}

```