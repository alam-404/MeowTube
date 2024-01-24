import { useLoaderData } from "react-router-dom"

function App() {
  const videoData = JSON.parse(useLoaderData());
  // console.log(videoData)
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {
          videoData.map(video => <div key={video.id} className="border rounded p-3 w-[400px]">
            <div className="">
            <img src={video.thumbnailUrl}className="w-full" />
              </div>
            <h1>{video.title}</h1>
          </div>)
        }
      </div>
    </>
  )
}

export default App
