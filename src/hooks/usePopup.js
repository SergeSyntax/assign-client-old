import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const usePopup = (selector = () => null) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menu = { anchorEl, open: Boolean(anchorEl) };
  const InProgress = useSelector(selector);

  // close popup when the process is complete
  useEffect(() => {
    if (InProgress !== undefined && !InProgress) setAnchorEl(null);
  }, [InProgress]);

  return [menu, setAnchorEl];
};

export default usePopup;
