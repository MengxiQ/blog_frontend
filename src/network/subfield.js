import {request} from "@/network/request";

export function getSubfieldByTitle(title){
  return request({
    url:'/subfield',
    params:{
      title:title
    }
  })
}