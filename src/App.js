import React from 'react';
// Route是路由的一個原材料，它是控制路徑對應顯示的組件。
// Switch常常會用來包裹Route，它裡面不能放其他元素，用來只顯示一個路由。
import { Route, Switch } from 'react-router-dom';
import './App.css';

// 頁面
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
// 元件
import NavBar from './components/Navbar'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* exact控制匹配到/路徑時不會再繼續向下匹配 */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms/" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
