import { API_ENDPOINTS, API_URL } from "@/constants/api";
import type { IUser } from "@/types/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${API_ENDPOINTS.searchUsers}${params.name}`)
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch(() => {})
      .finally(() => {});
  }, [params.name]);

  return <section></section>;
};

export default React.memo(Search);
