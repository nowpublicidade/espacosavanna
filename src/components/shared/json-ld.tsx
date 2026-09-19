type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Injeta um bloco JSON-LD. Escapa "<" para evitar quebra do script. */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
