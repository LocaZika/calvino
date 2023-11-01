import useSWR from "swr";

const host: any = process.env.HOST;

const headers = (method: string, data?: {}) => {
  const header: HeadersInit = {
    method,
    'content-type': 'application/json',
    body: JSON.stringify(data),
  };
  return header;
}

export default function useApi(api: IApi) {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const {data, error, isLoading} = useSWR(host + api, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const get = (api: string) => ({data, error, isLoading});
  const post = async (api: IApi, data: {}) => {
    const postData = await fetch(host + api, headers('POST', data));
    const res = await postData.json();
    return res;
  }
  const patch = async (id: string, data: {}) => {
    const postData = await fetch(`${host}${api}/${id}`, headers('PATCH', data));
    const res = await postData.json();
    return res;
  }
  const remove = async (id: string) => {
    const postData = await fetch(`${host}${api}/${id}`, headers('DELETE'));
    const res = await postData.json();
    return res;
  }
  return {get, post, patch, remove}
}
