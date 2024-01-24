import { useLoaderData } from "react-router-dom"
import VideoCard from "./components/VideoCard/VideoCard";

function App() {
  const videoData = JSON.parse(useLoaderData());
  // console.log(videoData)
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {
          videoData.map(video => <VideoCard key={video.id} video={video} />)
        }
      </div>
    </>
  )
}

export default App
