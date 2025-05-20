import Container from "@/components/helpers/Container";
import { API_ENDPOINTS, API_URL } from "@/constants/api";
import type { IUser } from "@/types/api";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import { Loader } from "@/components/ui/loader";

const Users = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${API_URL}/${API_ENDPOINTS.users}`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.users);
        setTotal(res.data.users.length);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
        <Loader className="scale-200" />
      </div>
    );
  }

  if (error) {
    return (
      <section>
        <Container className="flex items-center justify-center flex-col min-h-[90vh]">
          <h1 className="text-7xl font-semibold">{error.response?.status}</h1>
          <h2 className="text-3xl mt-3">{error.message}</h2>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <Container>
        <div className="flex justify-between items-center my-5">
          <h1 className="text-2xl">Users</h1>
          <p className="text-xl">total: {total}</p>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-5">
          {users.map((user: IUser) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Users);
