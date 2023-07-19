import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik';
import { useQueryClient } from 'react-query';
import { Bar, ChecboxLabel, Form } from './filter-bar.styled';
import { FilterCustomChecbox } from '../../../common/components/checkbox/filter-checkbox.componet';
import { Button } from '../../../common/components/button/button.component';
import { APP_KEYS } from '../../../common/consts';

interface IProps {
  onSubmit: Function;
}
export const FilterBarComponent: React.FC<IProps> = ({ onSubmit }) => {
  const client = useQueryClient();
  const formValues = {
    isDone: false,
    isPrivate: false,
    isNotDone: false,
    isNotPrivate: false
  };
  const handeleSubmit = (values: typeof formValues) => {
    const filters = {
      isDone: '',
      isPrivate: ''
    };
    if (values.isDone) {
      filters.isDone = 'true';
    }
    if (values.isNotDone) {
      filters.isDone = 'false';
    }
    if (values.isNotPrivate) {
      filters.isPrivate = 'false';
    }
    if (values.isPrivate) {
      filters.isPrivate = 'true';
    }
    onSubmit(filters);
    client.removeQueries(APP_KEYS.QUERY_KEYS.TODOS);
  };
  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit
  });

  const handeleClean = () => {
    formik.resetForm();
  };

  return (
    <Bar>
      <Form onSubmit={formik.handleSubmit}>
        <ChecboxLabel>
          Done
          <FilterCustomChecbox
            name="isDone"
            onChange={formik.handleChange}
            value="true"
            checked={formik.values.isDone}
            disabled={formik.values.isNotDone}
          />
        </ChecboxLabel>

        <ChecboxLabel>
          Private
          <FilterCustomChecbox
            name="isPrivate"
            onChange={formik.handleChange}
            value="true"
            checked={formik.values.isPrivate}
            disabled={formik.values.isNotPrivate}
          />
        </ChecboxLabel>
        <ChecboxLabel>
          NOT Done
          <FilterCustomChecbox
            name="isNotDone"
            onChange={formik.handleChange}
            value="false"
            checked={formik.values.isNotDone}
            disabled={formik.values.isDone}
          />
        </ChecboxLabel>

        <ChecboxLabel>
          NOT Private
          <FilterCustomChecbox
            name="isNotPrivate"
            onChange={formik.handleChange}
            value="false"
            checked={formik.values.isNotPrivate}
            disabled={formik.values.isPrivate}
          />
        </ChecboxLabel>
        <Button text="Filter" type="submit" />
      </Form>
      <Button onClick={handeleClean} text="Clean all" type="button" />
    </Bar>
  );
};
