import React, { useEffect, useState } from 'react';
import { getStoryIds } from "../services/hnApi";
import { Story } from '../components/Story';
import {
    GlobalStyle,
    StoriesWrapper,
} from "../styles/StoriesStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const Stories = () => {
    const [storyIds, setStoryIds] = useState([]);
    const { count } = useInfiniteScroll();

    useEffect(() => {
        getStoryIds().then(res => setStoryIds(res));
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoriesWrapper data-testid="stories-container">
            <h1> Hacker News </h1>      
             {!!storyIds && !!storyIds.length && storyIds.slice(0, count).map(storyId => <Story key={storyId} sid={storyId} />)}
            </StoriesWrapper>
        </>
    );
}