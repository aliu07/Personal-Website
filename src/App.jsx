import './App.css';
import HomeBanner from './Components/HomeBanner';
import Background from './Components/Background';

function App() {
  return (
      <div className='parent-container'>
        <div className='background-container'>
          <Background></Background>
        </div>
        <div className='profile-container'>
          <HomeBanner></HomeBanner>
        </div>
      </div>
  );
}

export default App;

// https://www.wix.com/website-template/view/html/2622?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_button&esi=bcd5be76-0905-430c-a238-325aed3b8eb4