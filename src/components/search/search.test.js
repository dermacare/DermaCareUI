import React from 'react';
import { MemoryRouter } from 'react-router';
import App from '../app';
import { mount } from 'enzyme';
import SearchControl from './search-control';

beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(() => {
		var p = new Promise((resolve, reject) => {
			resolve({
				ok: true,
				status: 200,
				json: function () {
					return [];
				}
			});
		});

		return p;
	});
});

test('Search component renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(SearchControl)).toHaveLength(1);
});
