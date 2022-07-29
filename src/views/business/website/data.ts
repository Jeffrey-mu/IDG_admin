import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setRoleStatus } from '/@/api/demo/system';
import { useMessage } from '/@/hooks/web/useMessage';
import { Tinymce } from '/@/components/Tinymce/index';
export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'roleName',
    width: 200,
  },
  {
    title: '文章ID',
    dataIndex: 'roleValue',
    width: 180,
  },
  {
    title: '主标题',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '副标题',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === '1',
        checkedChildren: '已启用',
        unCheckedChildren: '已禁用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          const { createMessage } = useMessage();
          setRoleStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改角色状态`);
            })
            .catch(() => {
              createMessage.error('修改角色状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '关键字',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '图片',
    dataIndex: 'remark',
  },
  {
    title: '录入账号',
    dataIndex: 'remark',
  },
  {
    title: '数据类型',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'roleNme',
    label: '数据类型',
    component: 'Input',
    colProps: { span: 8 },
    labelWidth: '200',
  },
  {
    field: 'status',
    label: '主标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '文章内容',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '外网地址',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: 'ID',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '站名',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '数据类型',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'roleValue',
    rules: [{ required: true }],
    label: '二级数据',
    required: true,
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'status',
    rules: [{ required: true }],
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '文章id',
    rules: [{ required: true }],
    field: 'remark',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '时间',
    rules: [{ required: true }],
    field: 'menu',
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
    label: '数据类型',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '文章链接',
    field: 'menu',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '标题',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
  },
  {
    label: '主标题',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
  },
  {
    label: '副标题',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
  },
  {
    label: '关键字',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
  },
  {
    label: '描述',
    rules: [{ required: true }],
    field: 'menu',
    component: 'Input',
  },
  {
    label: '导入文档',
    field: 'menu',
    component: 'Upload',
  },
  {
    field: 'tinymce',
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
    field: 'menu',
    component: 'Upload',
  },
];
