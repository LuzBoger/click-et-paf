import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {HelmetProvider} from 'react-helmet-async'
import viteLogo from '/vite.svg'
import './App.css'
import ArticleCard from './components/ArticleCard'

function App() {
  const helmetContext = {};


  return (
<HelmetProvider>
<ArticleCard />
    </HelmetProvider>
  )
}

export default App
