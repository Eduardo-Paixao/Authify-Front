import { ToastfyContext } from "@/contexts/ToastfyContext";
import { useContext } from "react";

export const useToastfy = () => useContext(ToastfyContext);