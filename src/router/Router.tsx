import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { GameList } from "../components/pages/GameList";
import { GameDetail } from "../components/pages/GameDetail";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamelists" element={<GameList />} />
      <Route path="/gamedetail" element={<GameDetail />} />
    </Routes>
  );
});
