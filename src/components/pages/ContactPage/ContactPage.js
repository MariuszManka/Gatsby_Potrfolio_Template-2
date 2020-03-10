import React from "react"
import {
  Shape,
  Image,
  FormWrapper,
  StyledContactPage,
} from "./StyledContactPage"
import { useStaticQuery, graphql } from "gatsby"
import Heading from "src/components/atoms/Heading/Heading"
import Paragraph from "src/components/atoms/Paragraph/Paragraph"
import Input from "src/components/molecules/Input/Input"
import TextArea from "src/components/molecules/TextArea/TextArea"
// import PagesLayout from "src/layouts/PagesLayout"

export const Contact = graphql`
  {
    datoCmsContact {
      contactimage {
        url
      }
      contactheading
      contactparagraph
      background {
        url
      }
    }
  }
`

const Form = () => {
  return (
    <FormWrapper action="https://formspree.io/mnqvrker" method="POST">
      <Input type="text" name="Name" placeholder="Name" iconName="person" />
      <Input
        type="email"
        name="_replyto"
        placeholder="E-mail"
        iconName="email"
      />
      <TextArea name="Message" placeholder="Be in touch..." rows="10" />
    </FormWrapper>
  )
}

export const ContactPage = () => {
  const contact = useStaticQuery(Contact)

  const {
    datoCmsContact: {
      background,
      contactimage,
      contactheading,
      contactparagraph,
    },
  } = contact

  return (
    <StyledContactPage id="contact">
      <Heading dark>{contactheading}</Heading>
      <Paragraph main size={"2.5rem"}>
        {contactparagraph}
      </Paragraph>
      <Shape url={background.url} />
      <Image src={contactimage.url} />
      <Form />
    </StyledContactPage>
  )
}
