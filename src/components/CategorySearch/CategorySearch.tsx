import { theme } from '@utils/globalConstants';

import { Headline2 } from '../Typography';

// TODO: Replace header with breadcrumb component
const CategorySearch = () => {
  return (
    <header>
      <h2>
        <Headline2 color={theme.colors.primary.dark1}>Category &gt; React</Headline2>
      </h2>
    </header>
  );
};
export default CategorySearch;
