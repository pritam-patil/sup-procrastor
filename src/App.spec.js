import React from "react";
import { act } from 'react-dom/test-utils';
import { cleanup, render, waitForElement } from '@testing-library/react';
import { App } from "./App";
import { singularStory, storyIds } from "./fixtures";
import { getStory, getStoryIds } from './services/hnApi';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { STORY_INCREMENT } from './constants';

beforeEach(cleanup);

// create initial mock
jest.mock('./hooks/useInfiniteScroll.js');
jest.mock('./services/hnApi.js', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}))

test('renders the app', async () => {
    useInfiniteScroll.mockImplementation(() => ({
        count: STORY_INCREMENT
    }));

    getStory.mockImplementation(() => Promise.resolve(singularStory));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

    const { getByText, queryByTestId } = render(<App />);

    await waitForElement(() => {
        expect(getByText('Hacker News')).toBeTruthy();
        // expect(getByText('Sample tech story')).toBeTruthy();
        // expect(queryByTestId('story-by').textContent).toEqual('By: Pritam Patil');
    });
});

