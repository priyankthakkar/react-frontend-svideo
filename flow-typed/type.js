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
