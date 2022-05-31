import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  min-width: 600px;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: transform 0.3s;
`;

export const InputContent = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 5px;
  color: #1f1f1f;
`;

export const Input = styled.input`
  background-color: #1f1f2e;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #61dafb;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 5px;
  color: white;

  :focus {
    outline: none;
    border: 2px solid #0085ff;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background: #0085ff;
  font-weight: 300;
  border: none;
  cursor: pointer;
  width: 20%;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease all;
`;

export const TextArea = styled.textarea`
  background-color: #1f1f2e;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #61dafb;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 5px;
  color: white;

  :focus {
    outline: none;
    border: 2px solid #0085ff;
  }
`;
