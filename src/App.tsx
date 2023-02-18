import { FC } from "react";
import { Banner } from "./components/banner/banner.component";
import { Feed } from "./components/feed/feed.component";
import { Header } from "./components/header/header.components";

interface nameProps { }

export const App: FC<nameProps> = ({ }) => {
  return <div>
    <Header />
    <Banner />
    <Feed />
  </div>
}