import { Outlet } from "react-router-dom";
import { HeaderAdm } from "../componets/HeaderAdm";

export function AdmLayout() {
  return (
    <div>
      <HeaderAdm />
      <Outlet />
    </div>
  );
}
