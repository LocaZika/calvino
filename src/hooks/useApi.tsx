import useSWR from "swr";

const host: string | undefined = process.env.NEXT_PUBLIC_HOST;

const headers = (method: string, data?: {}) => {
  const header: HeadersInit = {
    method,
    'content-type': 'application/json',
    body: JSON.stringify(data),
  };
  return header;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useApi(api: string) {
  const {data, error, isLoading} = useSWR(host + api, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  
  const post = async (api: string, data: {}) => {
    const postData = await fetch(host + api, headers('POST', data));
    const res = await postData.json();
    return res;
  }
  const patch = async (id: string, data: {}) => {
    const patchData = await fetch(`${host}${api}/${id}`, headers('PATCH', data));
    const res = await patchData.json();
    return res;
  }
  const remove = async (id: string) => {
    const removeData = await fetch(`${host}${api}/${id}`, headers('DELETE'));
    const res = await removeData.json();
    return res;
  }
  return {data, isLoading, error, post, patch, remove}
}
