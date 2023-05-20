import { theme } from "tailwind.config";

import { Title2 } from "../Typography";

// TODO: Replace header with breadcrumb component
const CategorySearch = () => {
  return (
    <header>
      <h2>
        <Title2 color={theme.colors.primary.dark1}>Category &gt; React</Title2>
      </h2>
    </header>
  );
};
export default CategorySearch;
