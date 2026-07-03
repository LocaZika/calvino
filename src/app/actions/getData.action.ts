import dotenv from 'dotenv';

if (process.env.NODE_ENV == 'production') {
  dotenv.config({path: './.env.production'});
}else{
  dotenv.config({path: './.env.development'});
}
export default async function getData<ResponseType>(path: string) {
  const res = await fetch(`${process.env.HOST_BE}${path}`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Error fetching from server!');
  }
  
  return res.json() as ResponseType;
}
