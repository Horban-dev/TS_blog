/* eslint-disable no-template-curly-in-string */
import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import { Header } from "./modules/feed/components/header/header.components";
import { GlobalFeedPage } from "./modules/feed/pages/global-feed.page";
import { ProfilePage } from "./modules/profile/components/pages/profile.page";
import bg from './bg.jpg';
interface AppProps { }

export const App: FC<AppProps> = () => {
  return (
    <div className="bg-[url('./bg.jpg')] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/@:profile" element={<ProfilePage />} />
        <Route path="/@:profile/favorites" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}