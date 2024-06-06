"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Highlight,HeroHighlight } from './ui/hero-highlight';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 12px;
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-bottom: 2px solid #007BFF;
  }

  &:hover {
    border-bottom: 2px solid #0056b3;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  resize: none;

  &:focus {
    border-bottom: 2px solid #007BFF;
  }

  &:hover {
    border-bottom: 2px solid #0056b3;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResponseMessage = styled.p`
  text-align: center;
  font-size: 14px;
  color: #28a745;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 14px;
  color: #dc3545;
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const MessageMe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {

      const response = await axios.post('/api', formData);
      console.log(response.data);
      setResponseMessage('Message sent successfully!');
      setErrorMessage('');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting message:', error);
      setResponseMessage('');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <Container>
        
      <Title className='text-2xl px-4 md:text-3xl lg:text-[60px] font-bold text-white-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto'>
        <Highlight className="text-black dark:text-black">
            Message Me
        </Highlight>
        </Title>
      <Form >
        <InputContainer>
          <Label className='text-5xl' htmlFor="name">
        <p className=' -ml-[357px] mt-[20px] text-2xl px-4 md:text-2xl lg:text-[27px] font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center '>Hello Harsh, My name is...</p>
          </Label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">
          <p className=' -ml-[280px] mt-[20px] text-2xl px-4 md:text-2xl lg:text-[30px] font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center '>and my Email is...</p>
          </Label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight text-gray-700  focus:outline-none focus:shadow-outline"
          />
        </InputContainer>
        
        <InputContainer>
          <Label htmlFor="message">
          <p className=' -ml-[300px] mt-[30px] text-2xl px-4 md:text-2xl lg:text-[30px] font-bold text-white dark:text-white  leading-relaxed lg:leading-snug text-center '>I want to say that...</p>
          </Label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          ></textarea>
        </InputContainer>
        <Button type="submit" onClick={handleSubmit}>Send</Button>
      </Form>
    </Container>
  );
};

export default MessageMe;
