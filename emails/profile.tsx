import * as React from "react";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Container } from "@react-email/container";
import { Section } from "@react-email/section";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>MR.Addict's Profile</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section>
            <Img src='https://avatars.githubusercontent.com/u/75357598' alt='avatar' style={avatar} />
            <Container style={username}>
              <strong>MR-Addict</strong>
            </Container>
          </Section>
          <Hr style={hr} />
          <Section>
            <Text style={paragraph}>
              大家好，我是南京工业大学一名在校本科生。这是一个简单的自我介绍。我喜欢电子、网页设计和Linux。我自认为我个人有些完美主义，只要是我认可的事我总会花时间把事情做好。
            </Text>
          </Section>
          <Hr style={hr} />
          <Section>
            <Text style={paragraph}>下面是我的个人主页，欢迎大家访问留言。</Text>
            <Link href='https://mraddict.one' style={link}>
              https://mraddict.one
            </Link>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
};

const container = {
  width: "350px",
  padding: "20px",
  margin: "40px auto",
  borderRadius: "10px",
  border: "1px solid #eaeaea",
};

const avatar = {
  width: "130px",
  height: "130px",
  margin: "20px auto",
  borderRadius: "50%",
};

const username = {
  color: "#000",
  fontSize: "23px",
  margin: "0 auto",
  lineHeight: "24px",
  width: "fit-content",
  fontFamily: "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu'",
};

const paragraph = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
  fontFamily: "BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu'",
};

const link = {
  color: "#067df7",
  textDecoration: "none",
};

const hr = {
  border: "none",
  borderTop: "1px solid #eaeaea",
  width: "100%",
};
