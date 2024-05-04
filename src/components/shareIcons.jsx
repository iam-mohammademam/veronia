/* eslint-disable react/prop-types */
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

const ShareIcons = ({ data }) => {
  const hashtags =
    data?.tags?.map((item) => {
      return `#${item}`;
    }) + "#mohammademam #blog_application";
  return (
    <ul className="flex items-center gap-3 relative">
      <span className="share-icons absolute w-full h-full bg-transparent pointer-events-none"></span>
      <FacebookShareButton
        className="hover:scale-90 duration-300 transition-all cursor-pointer"
        url={data?.thumbnail}
        hashtag={hashtags}
      >
        <FacebookIcon size={25} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        title={data?.heading}
        hashtag={hashtags}
        url={data?.thumbnail}
        className="hover:scale-90 duration-300 transition-all"
      >
        <XIcon size={25} round={true} />
      </TwitterShareButton>
      <TelegramShareButton
        title={data?.heading}
        className="hover:scale-90 duration-300 transition-all"
        url={data?.thumbnail}
        hashtag={hashtags}
      >
        <TelegramIcon size={25} round={true} />
      </TelegramShareButton>
    </ul>
  );
};
export default ShareIcons;
