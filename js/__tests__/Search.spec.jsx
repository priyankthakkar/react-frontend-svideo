// @flow

import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import ShowCard from '../ShowCard';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';

test('Search rnders correctly', () => {
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
	expect(component).toMatchSnapshot();
});

test('Search should show correct amount of ShowCard renders', () => {
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
	expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should show correct of ShowCard renders based on SearchTerm', () => {
	const searchWord = 'black';
	const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);
	/* component.find('input').simulate('change', { target: { value: searchWord } }); */
	const showCount = preload.shows.filter(
		show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
	).length;

	expect(component.find(ShowCard).length).toEqual(showCount);
});
