import { defHttp } from '/@/utils/http/axios';
import { getDataListResultModel, getOptionItemResultModel } from './model/dataModel';
import { useBusinessStore } from '/@/store/modules/business';
const useBusiness = useBusinessStore();

enum Api {
  getDataList = '/api/dataList',
  getBoutiqueStation = '/api/boutiqueStation',
  getDataTypeList = '/api/dataTypeList',
  getDataTwoTypeList = '/api/dataTwoTypeList',
  getSiteDataType = '/api/siteDataType',
  dataDelete = '/api/dataDelete',
}

/**
 * @description: Get data list based on params
 */

export const getDataList = (params) => {
  return defHttp.get<getDataListResultModel>({ url: Api.getDataList, params });
};
/**
 * @description: Get boutiqueStation list based
 */
export const getBoutiqueStation = async () => {
  const data = await defHttp.post<getOptionItemResultModel>({ url: Api.getBoutiqueStation });
  useBusiness.setBusinessOptions('boutique_station_id', data.items);
  return data.items;
};
/**
 * @description: Get getDataTypeList list based
 */
export const getDataTypeList = async () => {
  const data = await defHttp.get<getOptionItemResultModel>({ url: Api.getDataTypeList });
  useBusiness.setBusinessOptions('data_type_id', data.items);
  return data.items;
};
/**
 * @description: Get getDataTypeList list based
 */
export const getDataTwoTypeList = (params) => {
  return defHttp.get<getOptionItemResultModel>({ url: Api.getDataTwoTypeList, params });
};
/**
 * @description: Get getSiteDataType list based
 */
export const getSiteDataType = () => {
  return defHttp.get<getOptionItemResultModel>({ url: Api.getSiteDataType });
};
/**
 * @description: del info by id
 */
export const dataDelete = (params) => {
  return defHttp.get<getOptionItemResultModel>({ url: Api.dataDelete, params });
};
