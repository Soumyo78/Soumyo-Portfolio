// Importing SVG files
import { ReactComponent as MobileAppPic1 } from "../../resources/mobile-screen-pic-1.svg";
import { ReactComponent as ChatAppPic } from "../../resources/chat-app-pic-1.svg";

// Importing image files
import MusicPlayerPic from "../../resources/music-player-pic-4.png";
import ECommercePic from "../../resources/e-commence-pic-3.png";
import MovieReviewPic from "../../resources/movie-review-pic-2.jpeg";
import PhotoEditorPic from "../../resources/photo-editor-pic-1.jpg";
import TextEditorPic from "../../resources/text-editor-pic-1.png";
import SocialMediaPic from "../../resources/social-media-pic-1.png";
import HospitalManagementSystemPic from "../../resources/hospital-management-system-pic-1.png";
import RestaurantWebsitePic from "../../resources/restaurant-website-pic-1.jpg";
import VideoConverterPic from "../../resources/video-converter-pic-1.png";
import LiveWeatherPic from "../../resources/weather-pic-1.jpg";
import OnlineDrawingPic from "../../resources/online-drwaing-pic-1.jpg";

const featuredAppPortfolioData = [
  [
    <img
      src={ECommercePic}
      alt="e-commerce-pic"
      className="featured-app-pic"
    />,
    <img
      src={MovieReviewPic}
      alt="movie-review-pic"
      className="featured-app-pic"
    />,
    <img
      src={PhotoEditorPic}
      alt="photo-editor-pic"
      className="featured-app-pic"
    />,
    <img
      src={MusicPlayerPic}
      alt="music-player-pic"
      className="featured-app-pic"
    />,
    <img
      src={TextEditorPic}
      alt="text-editor-pic"
      className="featured-app-pic"
    />,
    <img
      src={SocialMediaPic}
      alt="social-media-pic"
      className="featured-app-pic"
    />,
  ],
  [
    "E-commerce Application",
    "Movie Review Application",
    "Chobi - A Simple Photo Editor",
    "Online Music Player",
    "Online Text Editor",
    "Social Media Application",
  ],
];

const fullStackAppPortfolioData = [
  [
    <img
      src={SocialMediaPic}
      alt="social-media-pic"
      className="full-stack-app-pic"
    />,
    <ChatAppPic className="full-stack-app-pic" />,
    <img
      src={RestaurantWebsitePic}
      alt="restaurant-website-pic"
      className="full-stack-app-pic"
    />,
    <img
      src={ECommercePic}
      alt="e-commerce-pic"
      className="full-stack-app-pic"
    />,
    <img
      src={MovieReviewPic}
      alt="movie-review-pic"
      className="full-stack-app-pic"
    />,
    <img
      src={HospitalManagementSystemPic}
      alt="hospital-management-system-pic"
      className="full-stack-app-pic"
    />,
  ],
  [
    "Social Media Application",
    "Chat Application",
    "Full Featured Restaurant Website",
    "E-commerce Application",
    "Movie Review Application",
    "Hospital Management System",
  ],
];

const reactAppPortfolioData = [
  [
    <img
      src={PhotoEditorPic}
      alt="photo-editor-pic"
      className="react-app-pic"
    />,
    <img
      src={MusicPlayerPic}
      alt="music-player-pic"
      className="react-app-pic"
    />,
    <img src={TextEditorPic} alt="text-editor-pic" className="react-app-pic" />,
    <img src={OnlineDrawingPic} alt="online-drawing-pic" className="react-app-pic" />,
    <img src={LiveWeatherPic} alt="live-weather-pic" className="react-app-pic" />,
    <img src={VideoConverterPic} alt="video-converter-pic" className="react-app-pic" />,
  ],
  [
    "Chobi - A Simple Photo Editor",
    "Online Music Player",
    "Online Text Editor",
    "Online Drawing Application",
    "Live Weather Application",
    "A Video Converter",
  ],
];

const mobileAppPortfolioData = [
  [
    <MobileAppPic1 className="mobile-app-pic" />,
    <MobileAppPic1 className="mobile-app-pic" />,
    <MobileAppPic1 className="mobile-app-pic" />,
    <MobileAppPic1 className="mobile-app-pic" />,
    <MobileAppPic1 className="mobile-app-pic" />,
    <MobileAppPic1 className="mobile-app-pic" />,
  ],
  [
    "Materialize Calculator",
    "Chat Application Mobile Client",
    "Music Player for Mobile",
    "Weather Application for Mobile",
    "Tetris Game",
    "Snake Game",
  ],
];

export {
  featuredAppPortfolioData,
  fullStackAppPortfolioData,
  reactAppPortfolioData,
  mobileAppPortfolioData,
};
