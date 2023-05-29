// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
function App() {

  
  const callApi = async()=>{
    try{
      const response = await axios.get("https://devorganaise.com/api/v1/service/user/health")
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    localStorage.setItem("token",'eyJraWQiOiJ1TlNjbnhvZ2I3ZG1vZnFUblozcm1nd1VDM3NpMzNGQU10eFRwbEpxTTBvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiNjkxYWI4Mi05NzM3LTRmMDQtYTQ3NC05YzQwNTdiZDgxN2QiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0xLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMV9NRXZVVFUxbkciLCJjbGllbnRfaWQiOiIyMGdicmx0bHZmdGhkNzExMDdtZjVscWM0aSIsIm9yaWdpbl9qdGkiOiJmMjRhNjc3NC00OTRlLTQ5ODctYThiNS1mZTE4NGI1ZDI1YTYiLCJldmVudF9pZCI6IjA3NGM3ZDgyLTBiYzctNDQzMy05MGIyLTIwYzVkNjJjNDA0YyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODUzNjI2NDUsImV4cCI6MTY4NTM2NjI0NSwiaWF0IjoxNjg1MzYyNjQ1LCJqdGkiOiIzMTI4YWE3NS1iYWFmLTQ3OTgtYWQ3NS1lOGE0MWE4YzI5MjMiLCJ1c2VybmFtZSI6ImI2OTFhYjgyLTk3MzctNGYwNC1hNDc0LTljNDA1N2JkODE3ZCJ9.XL5LZU6P9-LOVZzA7bkAU8X0zsHaLbJW11M2fywQi-tgDPWrDjFgahooH10KepE5ix5WfCwXlXOhwmBGifvAXKlyr4IrnHzIucnE3VbIKNlRKnp9SP49O3h8omyKatF4U4mhE7bUANcQnFz0ehNYB9g_MhrWOZXMWDBRkY48wkA51i1Hxtv40Zlked9ZDyaebCrYamM9OmdOxKqnUCPhbVOTk27QkdKdZ8B7Op4QG_wgNDcksHMZXNgKHo_j-CY1NUnIxY5jD03_znjpHtEa9ht-xkIkfRHlDjBzEa7LdVbeLP22kx_cdoQWjz4hVWTQUkBVzW6uSK67vPCpBny2uA')
},[])

  return (
    <div className="App">
      <button onClick={callApi}>Run APi</button>
    </div>
  );
}

export default App;
