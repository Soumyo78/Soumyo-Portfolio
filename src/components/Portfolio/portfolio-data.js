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
  {
    title: "E-commerce Application",
    key: "e-commerce-application",
    link: "",
    image: (
      <img
        src={ECommercePic}
        aria-hidden
        alt="e-commerce-pic"
        className="featured-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Movie Review Application",
    key: "movie-review-application",
    link: "",
    image: (
      <img
        src={MovieReviewPic}
        aria-hidden
        alt="movie-review-pic"
        className="featured-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Chobi - A Simple Photo Editor",
    key: "photo-editor-application",
    link: "https://project-chobi.netlify.app/",
    image: (
      <img
        src={PhotoEditorPic}
        aria-hidden
        alt="photo-editor-pic"
        className="featured-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Online Music Player",
    key: "music-player-application",
    link: "",
    image: (
      <img
        src={MusicPlayerPic}
        aria-hidden
        alt="music-player-pic"
        className="featured-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Online Text Editor",
    key: "online-text-editor-application",
    link: "",
    image: (
      <img
        src={TextEditorPic}
        aria-hidden
        alt="text-editor-pic"
        className="featured-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Social Media Application",
    key: "social-media-application",
    link: "",
    image: (
      <img
        src={SocialMediaPic}
        aria-hidden
        alt="social-media-pic"
        className="featured-app-pic item-img-pic"
      />
    ),
  },
];

const fullStackAppPortfolioData = [
  {
    title: "Social Media Application",
    key: "social-media-application",
    link: "",
    image: (
      <img
        src={SocialMediaPic}
        aria-hidden
        alt="social-media-pic"
        className="full-stack-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Chat Application",
    key: "chat-application",
    link: "",
    image: <ChatAppPic className="full-stack-app-pic item-img-pic" />,
  },
  {
    title: "Full Featured Restaurant Website",
    key: "restaurant-application",
    link: "",
    image: (
      <img
        src={RestaurantWebsitePic}
        aria-hidden
        alt="restaurant-website-pic"
        className="full-stack-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "E-commerce Application",
    key: "e-commerce-application",
    link: "",
    image: (
      <img
        src={ECommercePic}
        aria-hidden
        alt="e-commerce-pic"
        className="full-stack-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Movie Review Application",
    key: "movie-review-application",
    link: "",
    image: (
      <img
        src={MovieReviewPic}
        aria-hidden
        alt="movie-review-pic"
        className="full-stack-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Hospital Management System",
    key: "hospital-management-application",
    link: "",
    image: (
      <img
        src={HospitalManagementSystemPic}
        aria-hidden
        alt="hospital-management-system-pic"
        className="full-stack-app-pic item-img-pic"
      />
    ),
  },
];

const reactAppPortfolioData = [
  {
    title: "Chobi - A Simple Photo Editor",
    key: "photo-editor-application",
    link: "https://project-chobi.netlify.app/",
    image: (
      <img
        src={PhotoEditorPic}
        aria-hidden
        alt="photo-editor-pic"
        className="react-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Online Music Player",
    key: "online-music-player-application",
    link: "",
    image: (
      <img
        src={MusicPlayerPic}
        aria-hidden
        alt="music-player-pic"
        className="react-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Online Text Editor",
    key: "online-text-editor-application",
    link: "",
    image: (
      <img
        src={TextEditorPic}
        aria-hidden
        alt="text-editor-pic"
        className="react-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Online Drawing Application",
    key: "online-drawing-application",
    link: "",
    image: (
      <img
        src={OnlineDrawingPic}
        aria-hidden
        alt="online-drawing-pic"
        className="react-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "Live Weather Application",
    key: "live-weather-application",
    link: "",
    image: (
      <img
        src={LiveWeatherPic}
        aria-hidden
        alt="live-weather-pic"
        className="react-app-pic item-img-pic"
      />
    ),
  },
  {
    title: "A Video Converter",
    key: "video-converter-application",
    link: "",
    image: (
      <img
        src={VideoConverterPic}
        aria-hidden
        alt="video-converter-pic"
        className="react-app-pic item-img-pic"
      />
    ),
  },
];

const mobileAppPortfolioData = [
  {
    title: "Materialize Calculator",
    key: "materialize-calculator-application",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Chat Application Mobile Client",
    key: "chat-application-mobile-client",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Music Player for Mobile",
    key: "music-player-for-mobile-application",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Weather Application for Mobile",
    key: "weather-application-for-mobile",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Mobile Tetris",
    key: "mobile-tetris",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Snake Game for Mobile",
    key: "snake-game-for-mobile",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
];

const onlineGamesPortfolioData = [
  {
    title: "Candy Crush Game online",
    key: "candy-crush-game-online",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Rock, Paper, Scissors Online",
    key: "rock-paper-scissors-online",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Sample Online Game",
    key: "sample-online-game-1",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Sample Online Game",
    key: "sample-online-game-2",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Tetris Online",
    key: "tetris-online",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
  {
    title: "Snake Game Online",
    key: "snake-game-online",
    link: "",
    image: <MobileAppPic1 className="mobile-app-pic item-img-pic" />,
  },
];

// Named export
export {
  featuredAppPortfolioData,
  fullStackAppPortfolioData,
  reactAppPortfolioData,
  mobileAppPortfolioData,
  onlineGamesPortfolioData,
};
