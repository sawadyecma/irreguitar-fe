import { Cell } from "../../components/svg/Cell";
import {
  AbsnoteImpl,
  Absnotes,
  ChordAnalyzerImpl,
  ChordImpl,
  ChordNamerImpl,
  ChordParserImpl,
} from "irreguitar-pkg";
import { ChordMaker } from "../../components/GuitarBox.stories";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { LowerLogo } from "../../components/svg/LowerLogo";
import "antd/dist/antd.min.css";

export const TurningList = () => {
  const flets = Array.from(Array(12), (_, k) => k);

  console.log(new AbsnoteImpl(Absnotes.A1));

  const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
    new AbsnoteImpl(Absnotes.E3),
    new AbsnoteImpl(Absnotes.G3),
  ]);

  const parser = new ChordParserImpl(
    new ChordAnalyzerImpl(),
    new ChordNamerImpl()
  );

  return (
    <>
      <Layout>
        <Header color="blue" style={{ display: "flex", alignItems: "center" }}>
          <LowerLogo color="white" />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              minHeight: "280px",
              padding: "24px",
              background: "#fff",
            }}
          >
            <div>TurningList</div>
            {flets.map((f) => {
              return <Cell marked={f % 3 === 2} />;
            })}
            chord name: {parser.parse(chord)}
            <ChordMaker />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          irreguitar ©2022 Created by Ecma Systems
        </Footer>
      </Layout>
    </>
  );
};
