import { createContext } from "react";
import { ToastOptions, toast } from "react-toastify";
import { ProviderProps } from '../types/generic'

interface ToastContextType {
  showSuccess: (message: string, options?: ToastOptions) => void;
  showError: (message: string, options?: ToastOptions) => void;
  showInfo?: (message: string, options?: ToastOptions) => void;
  showWarning?: (message: string, options?: ToastOptions) => void;
}

export const ToastfyContext = createContext<ToastContextType>({} as ToastContextType);

export const ToastContextProvider = ({ children }: ProviderProps) => {
  const showSuccess = (message: string, options: ToastOptions = {}) => {
    toast.success(message, options);
  };
  const showError = (message: string, options: ToastOptions = {}) => {
    toast.error(message, options);
  };

  return (
    <ToastfyContext.Provider value={{ showSuccess, showError }}>
      {children}
    </ToastfyContext.Provider>
  );
};
