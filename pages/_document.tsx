import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from 'next/document';

type Props = DocumentInitialProps & {
  locale?: string;
};

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<Props> {
    const initialProps = await Document.getInitialProps(ctx);
    const queryLocale = typeof ctx.query.locale === 'string' ? ctx.query.locale : undefined;

    return {
      ...initialProps,
      locale: queryLocale,
    };
  }

  render() {
    const locale = this.props.locale ?? 'pt-BR';

    return (
      <Html lang={locale}>
        <Head>
          <meta
            name="description"
            content="JAE Pizzas offers artisan pizza with bold flavors, local delivery, and a conversion-focused landing page experience."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
