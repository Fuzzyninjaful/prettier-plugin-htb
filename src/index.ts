import type {
  AST,
  AstPath,
  Doc,
  Parser,
  ParserOptions,
  Plugin,
  Printer,
  RequiredOptions,
  SupportLanguage,
  SupportOptions,
} from 'prettier';

export const plugin: Plugin = {
  languages: [
    {
      name: 'HT Basic',
      parsers: ['htbasic'],
      extensions: ['.htb', '.stp'],
      vscodeLanguageIds: ['htbasic'],
    },
  ],
  parsers: {
    htbasic: {
      parse(
        text: string,
        parsers: { [parserName: string]: Parser },
        options: ParserOptions
      ): AST {
        return { comments: [] };
      },

      astFormat: 'htbasic-ast',

      locStart(node: any): number {
        return 0;
      },

      locEnd(node: any): number {
        return 0;
      },

      hasPragma(text: string): boolean {
        return false;
      },

      preprocess(text: string, options: ParserOptions): string {
        return text;
      },
    },
  },
  printers: {
    'htbasic-ast': {
      print(
        path: AstPath,
        options: ParserOptions,
        print: (path: AstPath) => Doc
      ): Doc {
        return '';
      },
    },
  },
  options: {},
  defaultOptions: {
    printWidth: Number.MAX_SAFE_INTEGER,
    proseWrap: 'never',
  },
};

export const languages: SupportLanguage[] | undefined = plugin.languages;
export const parsers: { [parserName: string]: Parser } | undefined =
  plugin.parsers;
export const printers: { [astFormat: string]: Printer } | undefined =
  plugin.printers;
export const options: SupportOptions | undefined = plugin.options;
export const defaultOptions: Partial<RequiredOptions> | undefined =
  plugin.defaultOptions;
