import React from 'react';
import { MemoryRouter } from 'react-router';
import App from '../app';
import { mount } from 'enzyme';
import ListView from './list-view';
import SeminarListView from './seminar-list-view';
import SportsListView from './sports-list-view';
import FreeFoodListView from './free-food-list';
import Card from '@material-ui/core/Card';
import ProfessorView from './details/professor-view';
import FaqView from './details/faq-view';

beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(() => {
		var p = new Promise((resolve, reject) => {
			resolve({
				ok: true,
				status: 200,
				json: function() {
					return [];
				}
			});
		});

		return p;
	});
});

test('Result FAQ component renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/faq?query=helloworld']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(ListView)).toHaveLength(1);
});

test('Result Professor component renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/professors?query=helloworld']}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find(ListView)).toHaveLength(1);
});

test('Professor details view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/professors/']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(ListView)).toHaveLength(1);
});

test('FAQ details view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/faq/']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(ListView)).toHaveLength(1);
});

test('Sports search results view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/sports/']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(SportsListView)).toHaveLength(1);
})

test('Free food search results view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/freefood/']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(FreeFoodListView)).toHaveLength(1);
})

test('Seminars search results view renders', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/search/seminars/']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(SeminarListView)).toHaveLength(1);
})
