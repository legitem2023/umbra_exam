import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message: string, type: "success" | "error" | "info" | "warning" = "info") => {
  toast[type](message, {
    position: "top-center",
    autoClose: 3000, // Closes after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
