import siteOptions from '@virtual/vitebook/core/site';
import type {
  SiteOptions,
  ThemeConfig,
  VirtualSiteDataModule
} from '@vitebook/core/shared';
import { Ref, ref, shallowReadonly } from 'vue';

export type SiteOptionsRef<Theme extends ThemeConfig = ThemeConfig> = Ref<
  Readonly<SiteOptions<Theme>>
>;

// Singleton.
const siteOptionsRef: SiteOptionsRef = ref(shallowReadonly(siteOptions));

export function useSiteOptions<
  Theme extends ThemeConfig = ThemeConfig
>(): Readonly<SiteOptionsRef<Theme>> {
  return shallowReadonly(siteOptionsRef) as Readonly<SiteOptionsRef<Theme>>;
}

if (import.meta.hot) {
  import.meta.hot.accept(
    '/@virtual/vitebook/core/site',
    (mod: VirtualSiteDataModule) => {
      siteOptionsRef.value = shallowReadonly(mod.default);
    }
  );
}
