import { Provider } from 'react-redux'
import { store } from '../store/store'
import CardList from './CardList'
import { Store } from './Store'
import { Header } from './Header'
import { Footer } from './Footer'

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
        <Header />
        <main className="flex-grow">
          <Store />
          <CardList />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App