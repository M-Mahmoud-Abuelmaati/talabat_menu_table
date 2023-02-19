import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API, Token } from "../constants/api";

interface TableSelectedProps {}

const TableSelected = ({}: TableSelectedProps) => {
  const { id } = useParams() as { id: string };
  const [table, setTable] = useState();

  useEffect(() => {
    const fetchTable = async () => {
      const response = await axios.get(`${API.main}/order?tableId=${id}`, {headers: {Authorization: 'Bearer ' + Token}});
      if (response) setTable(response.data.data.docs);
    };
    fetchTable()
  }, []);

  console.log(table)
  return <div>TableSelected</div>;
};

export default TableSelected;
