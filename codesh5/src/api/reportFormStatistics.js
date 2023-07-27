import {request, baseUrl} from '@/utils/request'


/***
 * 手机端报表统计（表格）
 *
 */
export function appReportFormStatisticsTable(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=appReportFormStatisticsTable`,
        method: 'get',
        params: data,
    })
}
