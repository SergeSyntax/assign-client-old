import React from 'react';
import { render } from '@testing-library/react';

import SubmitButton from './SubmitButton';

describe('<SubmitButton/>', () => {
  it('should show test if inProgress is false', () => {
    const { getByText, queryAllByTestId } = render(
      <SubmitButton text={'submit'} inProgress={false} />
    );
    const submitText = getByText(/submit/i);
    const submitSpinner = queryAllByTestId('spinner');

    expect(submitText).toBeDefined();
    expect(submitSpinner.length).toBe(0);
  });

  it('should hide text and show spinner if inProgress is true', () => {
    const { getByTestId, getByText } = render(<SubmitButton text={'submit'} inProgress={true} />);
    const submitSpinner = getByTestId('spinner');
    const submitText = getByText(/submit/i);

    expect(submitSpinner).toBeDefined();
    expect(submitText).not.toBeVisible();
  });
});
