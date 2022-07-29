import { defHttp } from '/@/utils/http/axios';
import { getDataListResultModel } from './model/dataModel';

enum Api {
  // getDataList = '/api/dataList',
  getDataList = '/api/dataList',
}

/**
 * @description: Get user menu based on id
 */

export const getDataList = (params) => {
  return defHttp.get<getDataListResultModel>({ url: Api.getDataList, params });
};
