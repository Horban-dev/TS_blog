/* eslint-disable no-template-curly-in-string */
import { FC } from "react";
import { Banner } from "./components/banner/banner.component";
import { Feed } from "./components/feed/feed.component";
import { Header } from "./components/header/header.components";
import bg from './bg.jpg';
interface nameProps { }
console.log(bg)
export const App: FC<nameProps> = ({ }) => {
  return <div className="bg-[url('./bg.jpg')] min-h-screen">
    <Header />
    <Banner />
    <Feed />
  </div>
}