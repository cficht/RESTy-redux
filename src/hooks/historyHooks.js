import { useSelector, useDispatch } from 'react-redux';
import { getRequests } from '../selectors/formSelectors';
import { resetRequests } from '../actions/formActions';

export const useHistory = () => {
  const dispatch = useDispatch();
  const requests = useSelector(getRequests);

  const handleReset = () => {
    dispatch(resetRequests());
  };

  return {
    requests,
    handleReset
  };
};
