import { ChordMaker } from "../../components/GuitarBox.stories";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { LowerLogo } from "../../components/svg/LowerLogo";
import "antd/dist/antd.min.css";

export const TurningList = () => {
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
