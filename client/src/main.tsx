import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import "./app/config/i18n/i18n"
import { StoreProvider } from './app/providers/store'
import "./app/styles/index.css"

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StoreProvider>
)
