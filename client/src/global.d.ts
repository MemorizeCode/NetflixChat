import '@testing-library/jest-dom';

type DeepPartial<T> = T extends object ? {[K in keyof T]?: DeepPartial<T[K]>} : T


