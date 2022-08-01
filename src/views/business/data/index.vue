<template>
  <div>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 添加 </a-button>
        <a-button type="primary" @click="handleCreate"> 导入 </a-button>
        <a-button type="primary" @click="handleCreate"> 图片资源上传oss </a-button>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'picture'">
          <TableImg
            :size="60"
            srcPrefix="http://47.104.212.164:3000"
            :simpleShow="true"
            :imgList="[record.picture]"
          />
        </template>
      </template>
    </BasicTable>
    <DataDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import { BasicTable, useTable, TableAction, TableImg } from '/@/components/Table';
  import { getDataList, dataDelete } from '/@/api/business/data';

  import { useDrawer } from '/@/components/Drawer';
  import DataDrawer from './DataDrawer.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { columns, searchFormSchema } from './data';

  export default defineComponent({
    name: 'BusinessData',
    components: { BasicTable, DataDrawer, TableAction, TableImg },
    setup() {
      const userState = useUserStore();
      const { createMessage } = useMessage();
      const searchInfo = reactive<Recordable>({});
      searchInfo.manager_name = userState.userInfo?.username;
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload }] = useTable({
        title: '数据中心',
        api: getDataList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },

        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: false,
        },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete({ id }: Recordable) {
        dataDelete({ id: id }).then((_) => {
          reload();
          createMessage.success('删除成功');
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
