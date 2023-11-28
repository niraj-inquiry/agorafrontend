import { useState } from 'react'
import AgoraUIKit from "agora-react-uikit";
import axios from 'axios'
const App = () => {
  const [videoCall, setVideoCall] = useState(false);
  const [getToken, setGetToken]=useState('')
  const handleRetriveToken=async ()=>{
   await axios.get(`https://agorabackend-vh3c.onrender.com/rtc/Testing/publisher/uid/123`)
   .then((token)=>{
    // console.log(token);
    setGetToken(token.data.rtcToken)
   
      setVideoCall(true)
   
   }).catch((err)=>{
    console.log(err);
   })
  }
console.log({getToken});
  const rtcProps = {
    appId: "24262f89eeba4f6e8abc63c8bcceeb4b",
    channel: "Testing",
    token: getToken,
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    videoCall ? <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} /> : 
    <>
    <button onClick={handleRetriveToken} >Join Meeting</button>
    </>

  )
}

export default App