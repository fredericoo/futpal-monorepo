import type { SuspenseProps } from 'react';
import React, { Suspense } from 'react';
import type { AwaitProps } from 'react-router-dom';
import { Await } from 'react-router-dom';

type DeferredProps<TData> = Pick<SuspenseProps, 'fallback'> &
	Pick<AwaitProps, 'errorElement'> & { data: TData; children: (data: Awaited<TData>) => React.ReactNode };

export const Deferred = <TData,>(props: DeferredProps<TData>) => {
	return (
		<Suspense fallback={props.fallback}>
			<Await resolve={props.data} errorElement={props.errorElement}>
				{props.children}
			</Await>
		</Suspense>
	);
};
