import { Provider } from 'react-redux'
import { store } from '../store/store'
import CardList from './CardList'
import { Store } from './Store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Store />
        <CardList />
      </div>
    </Provider>
  )
}

export default App