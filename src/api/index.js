import request from '@/utils/ajaxRequest'

// 获取数据
export function getData(params, listviewId) {
  let str = ''
  for (let key in params) {
    if (key == 'fd_customer_name' || key == 'fd_project_majorname' || key == 'fd_project_no' || key == 'fd_project_name') {
      str += `&q.${key}=${params[key]}`
    }
    else if (key == 'fdProjectType1' || key == 'fdProjectType2' || key == 'fdProjectType3'){
      str += `&${key}=${params[key].replace(/\([^\)]*\)/, '') }`
    }
    else if (key == 'fd_project_amount1' || key == 'fd_project_amount2') {
      str += `&q.fd_project_amount=${params[key]}`
    } else {
      str += `&${key}=${params[key]}`
    }
  }
  // let url = `http://3714ty0370.qicp.vip/sw/project/main/getProjectInfo.do?method=data&listviewId=1805936aa4bcb361f891530402883216${str}`
  let url = `/sw/project/main/getProjectInfo.do?method=data&listviewId=${listviewId}${str}`
  return request({
    url
  })
}

export function getDataById(fdId) {
  return request({
    url: `/sw/project/main/getProjectInfo.do?method=getViewData&fdId=${fdId}`,    
  })
}