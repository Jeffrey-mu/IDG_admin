import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const business: AppRouteModule = {
  path: '/business',
  name: 'business',
  component: LAYOUT,
  redirect: '/business/data',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.business.business'),
  },
  children: [
    {
      path: 'data',
      name: 'data',
      component: () => import('/@/views/business/data/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.business.data'),
      },
    },
    {
      path: 'website',
      name: 'website',
      component: () => import('/@/views/business/website/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.business.website'),
      },
    },
    {
      path: 'boutiqueStation',
      name: 'boutiqueStation',
      component: () => import('/@/views/business/boutiqueStation/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.business.boutiqueStation'),
      },
    },
    {
      path: 'shellingModule',
      name: 'shellingModule',
      component: () => import('/@/views/business/shellingModule/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.business.shellingModule'),
      },
    },
    {
      path: 'template',
      name: 'template',
      component: () => import('/@/views/business/template/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.business.template'),
      },
    },
    {
      path: 'violation',
      name: 'violation',
      component: () => import('/@/views/business/violation/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.business.violation'),
      },
    },
  ],
};

export default business;
