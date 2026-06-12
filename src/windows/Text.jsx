import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

function Text() {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;
  const paragraphs = Array.isArray(description) ? description : [];

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <article className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-cover object-center rounded-lg"
          />
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {paragraphs.map((paragraph, index) => (
          <p
            key={`${name}-${index}`}
            className="text-sm text-gray-700 leading-6">
            {paragraph}
          </p>
        ))}
      </article>
    </>
  );
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
