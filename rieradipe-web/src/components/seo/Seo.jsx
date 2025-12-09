import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords = "",
  image = "/img/AlbaFactieDefault.png",
  url = "https://albafactie.com",
  author = "Alba Factie",
}) {
  return (
    <Helmet>
      {/* ✔ Título y descripción */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* ✔ Meta esenciales */}
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={author} />

      {/* ✔ Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* ✔ Twitter / X Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
