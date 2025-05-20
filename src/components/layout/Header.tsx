import React, { useState } from "react";
import Container from "../helpers/Container";
import { Link, useNavigate } from "react-router-dom";
import { Search, UserCircle2Icon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <header className="py-2">
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/">
            <UserCircle2Icon />
          </Link>

          <form className="flex" onSubmit={handleSearch}>
            <Input
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button>
              <Search />
            </Button>
          </form>
        </nav>
      </Container>
    </header>
  );
};

export default React.memo(Header);
