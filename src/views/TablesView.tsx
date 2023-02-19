import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { getTables } from "../features/table/tableSlice";
import { Outlet } from "react-router-dom";

interface TablesViewProps {}

const TablesView = ({}: TablesViewProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTables());
  }, [dispatch])
  
  return <Outlet />;
};

export default TablesView;
