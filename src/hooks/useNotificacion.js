import { useContext } from "react";
import NotificacionContext from "../context/NotificacionContext";

export default function useNotification(){
    return useContext(NotificacionContext)
}