import { useNavigate } from "react-router-dom";

function useCustomNavigate() {
  const navigate = useNavigate();
  function handlenavigate(path) {
    navigate(path);
  }
  return handlenavigate;
}

export default useCustomNavigate;
