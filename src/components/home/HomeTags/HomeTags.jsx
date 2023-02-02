
import { HomeTagsWrapper, Tag, TagsContainer } from "./HomeTags.styled";
const HOME_TAGS = [
  "react",
  "javascript",
  "css",
  "html",
  "styled-components",
  "node",
  "express",
  "mongodb",
  "mongoose",
  "redux",
  "react-redux",
  "redux-thunk",
  "redux-saga",
  "redux-observable",
  "redux-logger",
];

const HomeTags = () => {
  return (
    <HomeTagsWrapper>
      <TagsContainer>
        {HOME_TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    </HomeTagsWrapper>
  );
};

export default HomeTags;
