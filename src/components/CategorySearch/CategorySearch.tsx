import { twMerge } from 'tailwind.config';

import { CategorySearchProps } from './types';

const CategorySearch: React.FC<CategorySearchProps> = ({ className = '' }) => {
  return <div className={twMerge(className, 'flex-1')}>searching content</div>;
};
export default CategorySearch;
