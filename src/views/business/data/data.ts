import type { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tinymce } from '/@/components/Tinymce/index';
import {
  getBoutiqueStation,
  getDataTypeList,
  getDataTwoTypeList,
  getSiteDataType,
} from '/@/api/business/data';
import { useBusinessStore } from '/@/store/modules/business';
const useBusiness = useBusinessStore();

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '文章ID',
    dataIndex: 'article_id',
    width: 80,
  },
  {
    title: '主标题',
    dataIndex: 'main_title',
  },
  {
    title: '副标题',
    dataIndex: 'subtitle',
    width: 120,
  },
  {
    title: '关键字',
    dataIndex: 'keywords',
    width: 180,
  },
  {
    title: '图片',
    dataIndex: 'picture',
  },
  {
    title: '录入账号',
    dataIndex: 'manager_name',
    width: 80,
  },
  {
    title: '数据类型',
    dataIndex: 'data_type_id',
    width: 80,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'data_type_id',
    label: '数据类型',
    component: 'ApiSelect',
    componentProps: {
      api: getDataTypeList,
      resultField: 'items',
      labelField: 'name',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
  {
    field: 'main_title',
    label: '主标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'content',
    label: '文章内容',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'src',
    label: '外网地址',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'article_id',
    label: 'ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'boutique_station_id',
    label: '站名',
    component: 'ApiSelect',
    componentProps: {
      api: getBoutiqueStation,
      resultField: 'items',
      labelField: 'name',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
];
export const formSchema: FormSchema[] = [
  {
    field: 'data_type_id',
    label: '数据类型',
    required: true,
    component: 'Select',
    componentProps: ({ formModel, formActionType }) => {
      return {
        options: useBusiness.getBusinessOptions('data_type_id'),
        fieldNames: {
          label: 'name',
          key: 'id',
          value: 'id',
        },
        onChange: async (e: any) => {
          // console.log(e)
          let options: any = [];
          if (e === undefined) {
            options = [];
          } else {
            const { items } = await getDataTwoTypeList({ dataId: e });
            options = items;
          }

          formModel.data_one_type_id = undefined; //  reset city value
          const { updateSchema } = formActionType;
          updateSchema({
            field: 'data_one_type_id',
            componentProps: {
              options,
              fieldNames: {
                label: 'name',
                key: 'id',
                value: 'id',
              },
            },
          });
        },
      };
    },
    colProps: { span: 8 },
  },
  {
    field: 'data_one_type_id',
    label: '二级数据',
    required: true,
    component: 'Select',
    componentProps: {
      options: [],
    },
    colProps: { span: 8 },
  },
  {
    field: 'user_name',
    rules: [{ required: true }],
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '文章id',
    rules: [{ required: true }],
    field: 'article_id',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '时间',
    rules: [{ required: true }],
    field: 'time',
    component: 'DatePicker',
    colProps: { span: 8 },
  },
  {
    label: '站点名',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '站内数据类型',
    rules: [{ required: false }],
    field: 'site_data_type_id',
    component: 'ApiSelect',
    componentProps: {
      api: getSiteDataType,
      resultField: 'items',
      labelField: 'name',
      valueField: 'id',
    },
    colProps: { span: 9 },
    labelWidth: '120px',
  },
  {
    label: '文章链接',
    field: 'html_url',
    component: 'Input',
    colProps: { span: 14 },
  },
  {
    label: '标题',
    rules: [{ required: true }],
    field: 'title',
    component: 'Input',
  },
  {
    label: '主标题',
    rules: [{ required: true }],
    field: 'main_title',
    component: 'Input',
  },
  {
    label: '副标题',
    rules: [{ required: true }],
    field: 'subtitle',
    component: 'Input',
  },
  {
    label: '关键字',
    rules: [{ required: true }],
    field: 'keywords',
    component: 'Input',
  },
  {
    label: '描述',
    rules: [{ required: true }],
    field: 'description',
    component: 'Input',
  },
  {
    label: '导入文档',
    field: 'menu',
    component: 'Upload',
    componentProps: {
      api: () => {},
    },
  },
  {
    field: 'content',
    component: 'Input',
    label: '内容',
    defaultValue: '',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
  {
    label: '图片上传',
    field: 'picture',
    component: 'Upload',
    componentProps: {
      api: () => {},
    },
  },
];
