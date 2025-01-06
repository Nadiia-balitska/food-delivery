import { assets } from "../../assets/frontend_assets/assets";
import "./AppDownload.css";
export const AppDownload = () => {
  return (
    <div className="app_download" id="app_download">
      <p>
        For better experience Download
        <br />
        Tomato app
        <div className="app_download_platform">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </p>
    </div>
  );
};
