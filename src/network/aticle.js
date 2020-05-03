import {request} from "@/network/request";

export function getAticleByURl(url) {
  return request({
    baseURL:url
  })
}