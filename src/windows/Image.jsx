import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function Image() {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div>
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
