import React, {useContext, useState} from "react"
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [text, setText] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [movie,setMovie] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [submitTrue, setSubmitTrue] = useState(true);
  const handleChange = (e) => {
    setText(e.target.value)
}
const handlePage = (e) => {
  e.preventDefault()
  console.log(e.target.value)
  setPage(e.target.value)
  if (page) {
    fetchPageData(text,page)
  }
}
const handleSubmit = (e) => {
  e.preventDefault()
  
  if (text) {
    fetchData(text)
    setSubmitTrue(false)
  }
}
const setDisplay = () => {
  if (submitTrue) {
    return 'none'
  }
  return 'flex'
}
const setRate = () => {
  if (!submitTrue) {
    return 'none'
  }
  return 'flex'
}
  
  const fetchData = async (search) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=c0b89a91`);
    const data = await response.json();
    setMovie(data.Search)
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }
  const fetchPageData = async (search,selectPage) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&page=${selectPage}&apikey=c0b89a91`);
    const data = await response.json();
    setMovie(data.Search)
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  
  return <AppContext.Provider value={{loading, movie, showPopup, setShowPopup}}>
    <div className="main">
      <input className="searchBox" type="text" placeholder='Search Movie with ...' value={text} onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
    <div className="rate" style={{display: setRate()}}>
      <h1>Please Provide Rating</h1>
    </div>
    {children}
    <div className="page" style={{display: setDisplay()}}>
      <input type="button" value="1" onClick={handlePage} />
      <input type="button" value="2" onClick={handlePage}/>
      <input type="button" value="3" onClick={handlePage}/>
      <input type="button" value="4" onClick={handlePage}/>
      <input type="button" value="5" onClick={handlePage}/>
   
    </div>
    
    </AppContext.Provider>
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppProvider}