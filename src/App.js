
// import { Member } from './Member';
import AboutUs from './AboutUs';
import "./App.css";
import Header from './Components/Header/Header';
import MemberList from './Components/MemberList/MemberList';

export function App() {

  return(
    <div>
      <Header />
      <div class="mainclu">
        <AboutUs />
        <MemberList />
      </div>
    </div>
  );
}

export default App;
