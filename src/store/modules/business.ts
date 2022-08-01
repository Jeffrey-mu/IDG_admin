import { defineStore } from 'pinia';
import { store } from '/@/store';
import { optionItem } from '/@/api/business/model/dataModel';

export const useBusinessStore = defineStore({
  id: 'business-state',
  state: () => ({
    data_type_id: [] as optionItem[],
    boutique_station_id: [] as optionItem[],
    errorLogListCount: 0,
  }),
  getters: {},
  actions: {
    async setBusinessOptions(key: string, data) {
      if (data.length > 0) this[key] = data;
      return true;
    },
    getBusinessOptions(key: string) {
      return this[key];
    },
  },
});

// Need to be used outside the setup
export function useErrorLogStoreWithOut() {
  return useBusinessStore(store);
}
