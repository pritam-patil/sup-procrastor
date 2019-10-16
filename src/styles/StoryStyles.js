import styled from 'styled-components';

export const StoryWrapper = styled.section`
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #cccccc;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

export const StoryTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
    text-decoration: none;

    a {
        font-size: 24px;
        background-image: linear-gradient(60deg, #f0f0f0 0%, #0fff77 100%);
        background-repeat: no-repeat;
        background-size: 96% 0.2em;
        background-position: 0 88%;
        transition: background-size 0.25s ease-in;
        text-decoration: none;
    }

    a:hover {
        background-size: 112% 88%;
        color: blue;
    }
`;

export const StoryMeta = styled.div`
    margin: 0.5rem 0;
    font-style: italic;
    > span:not(:first-child):before {
        content: '•';
        margin: 0 7px;
    }

    .story__meta-bold {
        font-weight: normal;
    }
`;

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${props => props.color || 'red'};
`;