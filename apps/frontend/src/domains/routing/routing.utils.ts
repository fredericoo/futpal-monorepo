import type { ActionFunction, LoaderFunction } from "react-router-dom";
import {
  defer as rrDefer,
  // eslint-disable-next-line no-restricted-imports
  useActionData as rrUseActionData,
  useLoaderData as rrUseLoaderData,
} from "react-router-dom";

/** Typesafe useLoaderData. Prefer this over react-router’s default. */
export const useLoaderData = rrUseLoaderData as <
  TLoader extends LoaderFunction
>() => LoaderData<TLoader>;

/** Typesafe useActionData. Prefer this over react-router’s default. */
export const useActionData = rrUseActionData as <
  TAction extends ActionFunction
>() => ActionData<TAction>;

export declare class DeferredData<TData extends Record<string, unknown>> {
  private pendingKeysSet;
  private controller;
  private abortPromise;
  private unlistenAbortSignal;
  private subscribers;
  data: TData;
  init?: ResponseInit;
  deferredKeys: string[];
  constructor(data: Record<string, unknown>, responseInit?: ResponseInit);
  private trackPromise;
  private onSettle;
  private emit;
  subscribe(fn: (aborted: boolean, settledKey?: string) => void): () => boolean;
  cancel(): void;
  resolveData(signal: AbortSignal): Promise<boolean>;
  get done(): boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  get unwrappedData(): {};
  get pendingKeys(): string[];
}
type DeferFunction = <T extends Record<string, unknown>>(
  data: T,
  init?: number | ResponseInit
) => DeferredData<T>;

export const defer = rrDefer as unknown as DeferFunction;

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
  ReturnType<TLoaderFn>
> extends Response | infer D
  ? D extends DeferredData<infer TDeferred>
    ? TDeferred
    : D
  : never;

export type ActionData<TActionFn extends ActionFunction> =
  | Awaited<ReturnType<TActionFn>>
  | undefined;

export const makeLoader = <TLoaderFn extends LoaderFunction>(
  loaderFn: TLoaderFn
) => {
  return loaderFn;
};

export const makeAction = <TActionFn extends ActionFunction>(
  actionFn: TActionFn
) => {
  return actionFn;
};
