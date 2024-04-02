import { Section } from 'components/About/About.styled';
import { Container } from 'components/GlobalStyle';
import { Title } from 'components/MindMap/MindMap.styled';
import btnClose from '../../images/sprite.svg';
import {
  Btn,
  InputWrap,
  StyledInput,
  Text,
  TextWrap,
  SvgWrap,
  ErrorMsg,
} from './Mint.styled';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';

export const Mint = () => {
  const [buttonText, setButtonText] = useState('Mint');

  const handleSubmit = values => {
    if (values) {
      setButtonText('Minted');
    }
    return;
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Wrong discord').required('Required'),
    password: Yup.string().min(6, 'Wrong address').required('Required'),
  });
  return (
    <Section id="mint">
      <Container>
        <Title>Are you in?</Title>
        <TextWrap>
          <svg width="24" height="24">
            <use href={`${btnClose}#x`} />
          </svg>
          <Text>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched, isValid }) => (
              <Form noValidate>
                <InputWrap $isError={errors.email}>
                  <SvgWrap>
                    <svg width="24" height="24" style={{ fill: '#5A65F2' }}>
                      <use href={`${sprite}#discord`} />
                    </svg>
                  </SvgWrap>
                  <StyledInput
                    name="email"
                    type="email"
                    placeholder="@username"
                    className={`special ${
                      errors.email && touched.email ? 'error' : ''
                    }`}
                  />
                </InputWrap>
                {errors.email && touched.email ? (
                  <ErrorMsg name="email" component="div" />
                ) : null}
                <InputWrap $isError={errors.password}>
                  <SvgWrap>
                    <svg width="24" height="24">
                      <use href={`${sprite}#fox`} />
                    </svg>
                  </SvgWrap>
                  <StyledInput
                    name="password"
                    type="text"
                    placeholder="WALLET ADDRESS"
                    className={`special ${
                      errors.password && touched.password ? 'error' : ''
                    }`}
                  />
                </InputWrap>
                {errors.password && touched.password ? (
                  <ErrorMsg name="password" component="div" />
                ) : null}
                <Btn type="submit">{!isValid ? 'Error' : buttonText}</Btn>
              </Form>
            )}
          </Formik>
        </TextWrap>
      </Container>
    </Section>
  );
};
