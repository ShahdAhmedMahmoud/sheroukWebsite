import FlowScroll, { FlowSection } from "../../Components/FlowScroll/FlowScroll";
import NewsFeed from "../../Components/NewsFeed/NewsFeed";
import NewsHero from "../../Components/NewsHero/NewsHero";

export default function News() {
  return (
    <FlowScroll aria-label="News and insights">
      <FlowSection aria-label="News introduction" className="bg-black">
        <NewsHero />
      </FlowSection>
      <FlowSection aria-label="Latest construction and real estate stories" className="bg-white">
        <NewsFeed />
      </FlowSection>
    </FlowScroll>
  );
}