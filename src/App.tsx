import { FC } from "react";
import { Article } from "./components/article/article.component";
import { Banner } from "./components/banner/banner.component";
import { Header } from "./components/header/header.components";

interface nameProps { }

export const App: FC<nameProps> = ({ }) => {
  return <div>
    <Header />
    <Banner />
    <Article />
  </div>
}