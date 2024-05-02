/* eslint-disable react/prop-types */
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const ShareIcons = ({ data }) => {
  return (
    <ul className="flex items-center gap-3">
      <FacebookShareButton
        className="hover:scale-90 duration-300 transition-all"
        url={data?.thumbnail}
        hashtag={`#${data?.tags[0]}`}
      >
        <FacebookIcon size={25} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        className="hover:scale-90 duration-300 transition-all"
        url={data?.thumbnail}
        hashtag={`#${data?.tags[0]}`}
      >
        <TwitterIcon size={25} round={true} />
      </TwitterShareButton>
      <TelegramShareButton
        className="hover:scale-90 duration-300 transition-all"
        url={data?.thumbnail}
        hashtag={`#${data?.tags[0]}`}
      >
        <TelegramIcon size={25} round={true} />
      </TelegramShareButton>
    </ul>
  );
};
export default ShareIcons;
