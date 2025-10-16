import ContentContainer from "@/components/container/ContentContainer";
import MainContainer from "@/components/container/MainContainer";

export default function Home() {
  return (
    <MainContainer>
      <main className="h-[200vh] content-padding header-margin">
        <ContentContainer>
          <h1>hello world</h1>
        </ContentContainer>
      </main>
    </MainContainer>
  );
}
