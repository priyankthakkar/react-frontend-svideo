// @flow

export type Show = {
	title: string,
	description: string,
	year: string,
	imdbID: string,
	poster: string,
	trailer: string,
	rating: string
};

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};

declare type ActionType = 'SET_SEARCH_TERM' | 'CLEAR_SEARCH_TERM';

declare type ActionT<A: ActionType, P> = {|
	type: A,
	payload: P
|};

export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'CLEAR_SEARCH_TERM', string>;
