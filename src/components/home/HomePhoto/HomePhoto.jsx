import { StyledImage, HomePhotoWrapper } from "./HomePhoto.styled";

const HomePhoto = () => {
  return (
    <HomePhotoWrapper>
      <StyledImage src="/img/profile-photo.jpeg" alt="home photo" />
    </HomePhotoWrapper>
  );
};

export default HomePhoto;
