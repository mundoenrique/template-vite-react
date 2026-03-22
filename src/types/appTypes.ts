import { type PropsWithChildren } from 'react';

export type WithChildrenProps<T = Record<string, unknown>> = PropsWithChildren<Readonly<T>>;

export type WithChildrenPropsRequired<T> = PropsWithChildren<Readonly<T>>;

export type WithChildrenPropsOptional<T = Record<string, unknown>> = PropsWithChildren<Readonly<Partial<T>>>;
