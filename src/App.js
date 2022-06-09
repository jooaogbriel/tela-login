import './App.css';
import { Form } from './pages/form';
import  {Userpage}  from './pages/userpage';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <main>

      <section className='login'>
        <Switch>

          <Route exact path='/'> 
          <Form/>
          </Route>

          <Route exact path='/userpage/:name'> 
          <Userpage/>
          </Route>

        </Switch>
      </section>

      <section class="wallpaper"></section>
      
    </main>
  );
}

export default App;
