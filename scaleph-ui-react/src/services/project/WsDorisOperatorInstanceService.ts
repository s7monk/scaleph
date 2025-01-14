import {PageResponse, ResponseBody} from '@/app.d';
import {request} from 'umi';
import {WsDorisOperatorInstance, WsDorisOperatorInstanceAddParam, WsDorisOperatorInstanceParam, WsDorisOperatorInstanceUpdateParam} from './typings';

export const WsDorisOperatorInstanceService = {
  url: '/api/doris/operator/instance',

  list: async (queryParam: WsDorisOperatorInstanceParam) => {
    return request<PageResponse<WsDorisOperatorInstance>>(`${WsDorisOperatorInstanceService.url}`, {
      method: 'GET',
      params: queryParam,
    }).then((res) => {
      const result = {
        data: res.records,
        total: res.total,
        pageSize: res.size,
        current: res.current,
      };
      return result;
    });
  },

  fromTemplate: async (templateId: number) => {
    return request<ResponseBody<WsDorisOperatorInstance>>(`${WsDorisOperatorInstanceService.url}/fromTemplate`, {
      method: 'GET',
      params: {templateId: templateId},
    });
  },

  asYaml: async (param: WsDorisOperatorInstance) => {
    return request<ResponseBody<any>>(`${WsDorisOperatorInstanceService.url}/asYaml`, {
      method: 'POST',
      data: param,
    });
  },

  add: async (param: WsDorisOperatorInstanceAddParam) => {
    return request<ResponseBody<any>>(`${WsDorisOperatorInstanceService.url}`, {
      method: 'PUT',
      data: param,
    });
  },

  update: async (param: WsDorisOperatorInstanceUpdateParam) => {
    return request<ResponseBody<any>>(`${WsDorisOperatorInstanceService.url}`, {
      method: 'POST',
      data: param,
    });
  },

  delete: async (row: WsDorisOperatorInstance) => {
    return request<ResponseBody<any>>(`${WsDorisOperatorInstanceService.url}/` + row.id, {
      method: 'DELETE',
    });
  },

  deleteBatch: async (rows: WsDorisOperatorInstance[]) => {
    const params = rows.map((row) => row.id);
    return request<ResponseBody<any>>(`${WsDorisOperatorInstanceService.url}/` + 'batch', {
      method: 'DELETE',
      data: params,
    });
  },
};
