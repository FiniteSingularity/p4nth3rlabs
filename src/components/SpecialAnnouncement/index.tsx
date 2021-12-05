import { Container, TopBar, TopBarText } from "./index.style";

interface SpecialAnnouncementProps {}

export default function SpecialAnnouncement(props: SpecialAnnouncementProps) {
  return (
    <Container>
      <TopBar>
        <TopBarText>
          • breaking news • breaking news • breaking news • breaking news • breaking news • breaking
          news • breaking news • breaking news • breaking news • breaking news • breaking news •
          breaking news • breaking news • breaking news • breaking news • breaking news • breaking
          news • breaking news • breaking news • breaking news • breaking news • breaking news •
          breaking news • breaking news • breaking news • breaking news • breaking news • breaking
          news
        </TopBarText>
      </TopBar>
    </Container>
  );
}
