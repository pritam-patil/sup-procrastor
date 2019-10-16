/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from 'react';
import { getStory } from "../services/hnApi";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

export const Story = memo(({sid}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(sid).then(data => {
            data && data.url && setStory(data);
        })
    }, [])

    return !!story.url && (
        <StoryWrapper data-testid="story">
            <StoryTitle>
            <a href={story.url} rel="noopener noreferrer" target="_blank">
                {story.title}
            </a>
            </StoryTitle>
            <StoryMeta>
                <span className="story__by" data-testid="story-by">
                    <StoryMetaElement color="#000">
                        By:
                    </StoryMetaElement> { story.by }
                </span>
                <span className="story__time" data-testid="story-time">
                    <StoryMetaElement color="#000">
                        Posted:
                    </StoryMetaElement> {`${mapTime(story.time)} ago` }
                </span>
            </StoryMeta>
        </StoryWrapper>
        );
});
