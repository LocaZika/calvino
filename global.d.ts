declare module '*.css';
declare module '*.scss';

namespace NodeJS{
  interface ProcessEnv{
    NODE_ENV: string;
    HOST_BE: string;
  }
}

interface IComponentProps<T> {
  data: T;
}