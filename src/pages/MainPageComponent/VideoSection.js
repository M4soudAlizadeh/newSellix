const VideoSection = () => {
  return (
    <div className="max-w-[1376px] mx-auto mdMax:hidden ">
      <video className="w-2/3 mx-auto rounded-2xl" controls>
        <source
          src="https://file-examples.com/storage/fec91aecf9647d0f79cc0bb/2017/04/file_example_MP4_480_1_5MG.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};
export default VideoSection;
