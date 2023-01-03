import { useEffect } from "react";

const useSetInputFocus = (watchValue, inputRef) => {
  useEffect(() => {
    if (inputRef.current && inputRef.current.focus) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchValue]);
};

export default useSetInputFocus;
