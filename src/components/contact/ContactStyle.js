import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-columns: auto;
`;

export const Wrapper = styled.div`
  padding: 0px 25px 0px 25px;
  display: grid;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 920px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (max-width: 700px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const FormMessage = styled.form`
  width: 600px;
  padding: 20px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  transition: transform 0.3s;

  @media (max-width: 700px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InputContent = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 300;
  font-size: 14px;
  color: #c2c2d6;
`;

export const Input = styled.input`
  background-color: #1f1f2e;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #668cff;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 2px;
  color: #c2c2d6;

  :focus {
    outline: none;
    border: 2px solid #b3c6ff;
  }
`;

/* display: flex;
  align-items: center;
  height: 40px;
  border: solid 1px;
  border-color: #c2c2d6;
  border-radius: 8px;
  color: #c2c2d6;
  display: flex;
  cursor: pointer;
  padding: 10px; */

export const Button = styled.button`
  background-color: #3366ff;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 20%;
  padding: 10px;
  color: white;
  font-size: 17px;
  height: 40px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  background-color: #1f1f2e;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 2px solid #668cff;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;
  color: #c2c2d6;

  :focus {
    outline: none;
    border: 2px solid #b3c6ff;
  }
`;

export const TextError = styled.p`
  font-size: 15px;
  color: #ff6666;
`;
