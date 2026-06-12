import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

function Contact() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact me</h2>
      </div>

      <div className="p-5 bg-white space-y-4">
        <img
          src="/images/adrian.jpg"
          alt="Adrian"
          className="w-20 rounded-full mx-auto"
        />
        <h3>Let&apos;s connect!</h3>
        <p className="text-sm text-gray-700 leading-6">
          Actively coping, would be the perfect addition of cringe and
          complaints to your daily life. I promise to only send you memes and
          talk about the world cup.
        </p>
        <p>philippe.siaka@gmail.com</p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}>
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
