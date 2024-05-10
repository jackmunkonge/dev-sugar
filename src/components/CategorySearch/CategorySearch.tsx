'use client';

import { Field, Form, Formik } from 'formik';
import { twMerge } from 'tailwind.config';
import * as Yup from 'yup';

import { Headline2 } from '@components/Typography';

import { ButtonWrapper, CategoryJar, Input } from '..';
import categories from '../../data/categories.json';
import { CategorySearchProps } from './types';

const Schema = Yup.object().shape({
  categorySearchQuery: Yup.string(),
});

const SearchBar: React.FC<any> = ({ className = '' }) => (
  <div className={className}>
    <Formik
      validationSchema={Schema}
      initialValues={{ categorySearchQuery: '' }}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form>
          <Field
            id="categorySearchQuery"
            name="categorySearchQuery"
            placeholder="Find a category"
            isDisabled={false}
            isSuccess={false}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categorySearchQuery}
            component={Input}
          />
        </Form>
      )}
    </Formik>
  </div>
);

const JarGrid: React.FC<any> = ({ className = '' }) => (
  <div
    className={twMerge(
      className,
      'grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-4',
      'overflow-y-scroll overflow-x-hidden',
    )}
  >
    {categories.map(({ id, name, color, subcategories }) => (
      <ButtonWrapper
        key={id}
        className="p-2"
        isDisabled={false}
        isLoading={false}
        isFullWidth={false}
        clickHandler={() => {}}
        whileHover={{ y: -8 }}
      >
        <CategoryJar color={color} stickerText={name} />
      </ButtonWrapper>
    ))}
  </div>
);

// TODO: Use library to make text dynamic sized
// TODO: Make better sticker for jars

const CategorySearch: React.FC<CategorySearchProps> = ({ className = '' }) => {
  return (
    <div className={twMerge(className, 'flex flex-col overflow-hidden px-0 desktop:px-40')}>
      <Headline2 className="hidden desktop:block px-2">Categories</Headline2>

      <JarGrid className="mt-6 p-2" />
    </div>
  );
};
export default CategorySearch;
