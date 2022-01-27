import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:yahwehcharitabletrust@gmail.com">
                <Chat>{t(`yahwehcharitabletrust@gmail.com`)}</Chat>
                <Para>Phone Number: +91-9035522703</Para>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Yahweeh Charitable Trust for FCS</Para>
              <Para>Regd. 00380-2021-22</Para>
              <Para>No 222, Standlishee Road</Para>
              <Para>Near Malik Rice Bazaar</Para>
              <Para>Bangalore 560047</Para>
            </Col>      
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="Yahweeh.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://twitter.com/YahwehFcs"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.facebook.com/Yahweh-charitable-trust-108268255098687/?ref=pages_you_manage"
                src="Facebook.svg"
              />
              <SocialLink
                href="https://wa.me/message/SACXF5ZDZHUVL1"
                src="whatsapp.svg"
              />
              <SocialLink
                href="https://www.facebook.com/Yahweh-charitable-trust-108268255098687/?ref=pages_you_manage"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
