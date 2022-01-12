import { defineConfig, clientPlugin } from '@vitebook/client/node';
import { svelteMarkdownPlugin } from '@vitebook/markdown-svelte/node';
import { shikiMarkdownPlugin } from '@vitebook/markdown-shiki/node';
import {
  DefaultThemeConfig,
  defaultThemePlugin,
} from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
  include: ['src/**/*.md', 'src/**/*.story.svelte'],
  plugins: [
    shikiMarkdownPlugin(),
    svelteMarkdownPlugin(),
    clientPlugin({
      appFile: 'App.svelte',
      svelte: {
        extensions: ['.svelte', '.md'],
        experimental: {
          // Remove if using `svelte-preprocess`.
          useVitePreprocess: true,
        },
      },
    }),
    defaultThemePlugin(),
  ],
  site: {
    title: 'Vitebook',
    description: 'Blazing fast Storybook alternative.',
    theme: {
      remoteGitRepo: {
        url: 'vitebook/vitebook',
      },
    },
  },
});
