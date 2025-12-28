import { useNavigate } from "react-router-dom";

export default function BackButton({ fallback = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button onClick={handleBack} className="backButton">
      ← Volver
    </button>
  );
}
