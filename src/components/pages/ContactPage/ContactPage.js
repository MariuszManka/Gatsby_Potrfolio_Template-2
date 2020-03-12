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
    <FormWrapper
      data-sal-duration="700"
      data-sal="slide-left"
      data-sal-easing="ease-out-back"
      action="https://formspree.io/mnqvrker"
      method="POST"
    >
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
      <Heading
        data-sal-duration="700"
        data-sal="fade"
        data-sal-easing="ease-out-back"
        dark
      >
        {contactheading}
      </Heading>
      <Paragraph
        data-sal-duration="700"
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        main
        size={"2.5rem"}
      >
        {contactparagraph}
      </Paragraph>
      <Shape url={background.url} />
      <Image
        data-sal-duration="700"
        data-sal="slide-up"
        data-sal-easing="ease-out-back"
        src={contactimage.url}
      />
      <Form />
    </StyledContactPage>
  )
}
