import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Sidebar from './components/Sidebar';
import { useStateContext } from './contexts/ContextProvider'
import Navbar from './components/Navbar';
import Ecommerce from './components/Ecommerce';
import Editor from './components/Editor';
import Kanban from './components/Kanban';
import Calendar from './components/Calendar';
import Line from './pages/Line';
import Area from './pages/Area';
import Bar from './pages/Bar';
import Financial from './pages/Financial';
import ColorMapping from './pages/ColorMapping';
import Pyramid from './pages/Pyramid';
import Pie from './pages/Pie';
import Stacked from './pages/Stacked';
import Orders from './pages/Orders';
import Employees from './pages/Employees';
import Customers from './pages/Customers';

function App() {
  const { activeMenu } = useStateContext();
  return (
    <>
      <BrowserRouter>
        <div style={{ display: 'flex', width: '98vw', position: 'relative' }}>
        {/* <div style={{ display: 'flex', position: 'relative' }}> */}
          <div className='app-sidebar' >
            {activeMenu && <Sidebar />}
          </div>
          <div className={activeMenu?'main-margin':'main-withoutMargin'}>
          <div style={{ position: 'fixed'}}>
            <Navbar />
          </div>
          <div className="elements">
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={(<Ecommerce />)} />
              <Route path="/ecommerce" element={(<Ecommerce />)} />
              <Route path="/editor" element={(<Editor />)} />
              <Route path="/kanban" element={(<Kanban />)} />
              <Route path="/calendar" element={(<Calendar />)} />
              <Route path="/line" element={(<Line />)} />
              <Route path="/area" element={(<Area />)} />
              <Route path="/bar" element={(<Bar />)} />
              <Route path="/financial" element={(<Financial />)} />
              <Route path="/color-mapping" element={(<ColorMapping />)} />
              <Route path="/pyramid" element={(<Pyramid />)} />
              <Route path="/pie" element={(<Pie />)} />
              <Route path="/stacked" element={(<Stacked />)} />
              <Route path="/orders" element={(<Orders />)} />
              <Route path="/employees" element={(<Employees />)} />
              <Route path="/customers" element={(<Customers />)} />

              
            </Routes>
            </div>
          </div>
        </div>
        {/* <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
    <Navbar/>
    
    <Ecommerce/>
    
    </div>
    </div> */}
        {/* <div>
      <div className='settings'>
        <TooltipComponent content="Settings" position="top">
          <button>
            <FiSettings/>
          </button>
          </TooltipComponent>
      </div>
    </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
