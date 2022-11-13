import { MOCK_IMAGES_CONTENTS } from '../api/mocks';

export const getImageContent = (id: number) => {
  return MOCK_IMAGES_CONTENTS[id];
};
