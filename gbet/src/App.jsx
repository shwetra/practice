import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DepositRequest from "./pages/transactions/DepositRequest";
import WithdrawRequest from "./pages/transactions/withdrawRequest";
import AutoDeposit from "./pages/transactions/AutoDeposit";
import ManualDeposit from "./pages/transactions/ManualDeposit";
import ManualWithdraw from "./pages/transactions/ManualWithdraw";
import Player from "./pages/player/PlayerList";
import PlayerDetails from "./pages/player/PlayerDetails";
import CreatePlayer from "./pages/player/CreatePlayer";
import AdminList from "./pages/admin/AdminList";
import CreateAdmin from "./pages/admin/CreateAdmin";
import Betby from "./pages/sportsbook/Betby";
import Jetfair from "./pages/sportsbook/Jetfair";
import Settings from "./pages/Settings";
import MyProfile from "./pages/MyProfile";
import LoginPage from "./pages/Login";
function App() {
  return (
    <>
      {/* All route goes here */}
      <main className="relative h-screen flex bg-gray-100 overflow-y-auto overflow-x-hidden sm:overflow-hidden">
        <Sidebar />
        <article className=" flex-1 h-screen overflow-auto">
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions/requests/deposit" element={<DepositRequest />} />
            <Route path="/transactions/requests/withdraw" element={<WithdrawRequest />} />
            <Route path="/transactions/auto/deposit" element={<AutoDeposit />} />
            <Route path="/transactions/manual/deposit" element={<ManualDeposit />} />
            <Route path="/transactions/manual/withdraw" element={<ManualWithdraw />} />
            <Route path="/player" element={<Player />} />
            <Route path="/player/details" element={<PlayerDetails />} />
            <Route path="/player/create" element={<CreatePlayer />} />
            <Route path="/admin" element={<AdminList />} />
            <Route path="/admin/create" element={<CreateAdmin />} />
            <Route path="/sportsbook/betby" element={<Betby />} />
            <Route path="/sportsbook/jetfair" element={<Jetfair />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/me/profile" element={<MyProfile />} />
          </Routes>
        </article>
      </main>
    </>
  );
}

export default App;
