import axios from "axios";
import { selectFields } from "../selectors/selectFields";

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const NEW_STORIES_URL = `${BASE_URL}/newstories.json`;
export const STORY_URL = `${BASE_URL}/item/`;

export const getStory = async id => {
    const result = await axios.get(`${STORY_URL}/${id}.json`)
        .then(({ data }) => selectFields(data));

    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(NEW_STORIES_URL)
        .then(({ data }) => data);

    return result;
};