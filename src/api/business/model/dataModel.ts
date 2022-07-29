export interface dataItem {
  article_id: number | null;
  boutique_station_id: string | null;
  clicks_number: string;
  content: string;
  data_one_type_id: null;
  data_type_id: string;
  description: null;
  dimensions: string;
  game_type_id: string;
  html_url: null;
  id: number;
  input_time: null;
  instructton: null;
  keyfeatures: null;
  keywords: null;
  main_title: string;
  manager_name: null;
  picture: string;
  score: string;
  site_data_type_id: string;
  src: string;
  subtitle: null;
  time: string;
  title: null;
  update_time: null;
  user_name: null;
}
export interface getDataListModel<T> {
  code: number;
  data: T[];
  pageTotal: number;
}
/**
 * @description: Get menu return value
 */
export type getDataListResultModel = getDataListModel<dataItem>;
