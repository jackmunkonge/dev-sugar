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

const JarGrid: React.FC<any> = ({ className = '' }) => (
  <div
    className={twMerge(
      className,
      'grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-7',
      'overflow-y-scroll overflow-x-hidden',
    )}
  >
    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
      isDisabled={false}
      isLoading={false}
      isFullWidth={false}
      pathName="/"
      clickHandler={() => {}}
      whileHover={{ scale: 1.1 }}
    >
      <CategoryJar color={JarColor.BLUE} stickerText="React" />
    </ButtonWrapper>

    <ButtonWrapper
      className="p-2"
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

// TODO: Use library to make text dynamic sized

const CategorySearch: React.FC<CategorySearchProps> = ({ className = '' }) => {
  return (
    <div className={twMerge(className, 'flex flex-col overflow-hidden')}>
      <Headline2 className="hidden desktop:block px-2">Categories</Headline2>

      <div className="mt-8 w-full flex justify-center desktop:w-fit ml-2">
        <SearchBar className="w-full px-4 tablet:px-40 desktop:px-0 desktop:w-[220px]" />
      </div>

      <JarGrid className="mt-6 p-2" />
    </div>
  );
};
export default CategorySearch;
