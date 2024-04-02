'use client';

import { Field, Form, Formik } from 'formik';
import { twMerge } from 'tailwind.config';
import * as Yup from 'yup';

import { JarColor } from '@components/CategoryJar/types';
import { Headline2 } from '@components/Typography';

import { ButtonWrapper, CategoryJar, Input } from '..';
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

const CategorySearch: React.FC<CategorySearchProps> = ({ className = '' }) => {
  return (
    <div className={twMerge(className, 'flex-1 flex flex-col')}>
      <Headline2>Categories</Headline2>

      <SearchBar className="mt-8 w-[220px]" />

      <ButtonWrapper
        isDisabled={false}
        isLoading={false}
        isFullWidth={false}
        pathName="/"
        clickHandler={() => {}}
        whileHover={{ scale: 1.1 }}
      >
        <CategoryJar color={JarColor.BLUE} stickerText="React" />
      </ButtonWrapper>
    </div>
  );
};
export default CategorySearch;
