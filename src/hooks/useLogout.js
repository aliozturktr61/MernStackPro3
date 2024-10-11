import { useAuthContext } from "./useAuthContext";
import { useNotContext } from "./useNotContext";

export const useLogout = () => {
  //aynı yerde 2 dispacth olmayacağından ikncisine yeni isimle oluşturduk.
  const { dispatch } = useAuthContext();
  const { dispatch: notDispatch } = useNotContext();

  const logout = () => {
    localStorage.removeItem("kullanici");

    dispatch({ type: "LOGOUT" });
    notDispatch({ type: "NOT_DOLDUR", payload: null });
  };

  return { logout };
};
