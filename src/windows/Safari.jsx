import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

function Safari() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5 ">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog">
        <h2>My hosted projects</h2>

        <div className="space-y-8">
          {blogPosts.map((item) => (
            <div key={item.id} className="blog-post">
              <div className="col-span-2">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="content">
                <p>{item.date}</p>
                <h3>{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-hover">
                  Check the full project <MoveRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
