import React , { useState , useEffect} from "react";

interface fileProps {
  showFile: boolean;
  onClose: () => void;
  fileURL: any;
  fileName: any;
}

const FileUpload: React.FC<fileProps> = ({ fileURL, fileName, showFile, onClose }) => {

  useEffect(() => {
    const iframe = document.getElementById("your-iframe-id") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = fileURL;
    }
  }, [showFile]);

  return (
    <div className="">
      <div
        className={
          showFile
            ? "is-visible fds-side-panel fds-side-panel-lg"
            : "hidden fds-side-panel fds-side-panel-lg"
        }
        id="lfr-side-panel-dl"
      >
        <div className="tab-content">
          <div className="active fade show tab-pane" role="tabpanel">
            <div className="lfr-objects__side-panel-content">
              <div className="lfr-objects__side-panel-content-header">
                <div className="lfr-objects__side-panel-content-header-title">
                  <h3 className="mb-0">Document Media</h3>
                </div>
                <button
                  className="btn btn-unstyled close-sidebar-button"
                  type="button"
                  aria-label="Cancel"
                  onClick={onClose}
                >
                  <svg
                    className="lexicon-icon lexicon-icon-times"
                    role="presentation"
                  >
                    <use xlinkHref="/o/admin-theme/images/clay/icons.svg#times"></use>
                  </svg>
                </button>
              </div>
              <div className="lfr-objects__card">
                <div className="lfr-objects__card-header">
                  <h3 className="lfr-objects__card-title">{fileName}</h3>
                </div>
                <div className="lfr-objects__card-body">
                  {fileURL && 
                  <iframe id="your-iframe-id" src={fileURL}></iframe>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
