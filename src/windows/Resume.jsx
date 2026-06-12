import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString(); //all this is react-pdf mumbo jumbo to get the pdf worker working, without it the pdf won't render and you'll get a warning in the console about missing worker

function Resume() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />

        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download my resume">
          <Download className="icon" />
        </a>
      </div>
      <Document file="files/resume.pdf">
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
