import { Button, styled } from '@mui/material';

export const CustomStyles = {
  button: {
    margin: '2em'
  },
  Input: {
    height: "2.6em",
    fontFamily: 'IBM Plex Mono'
  },
  Box: {
    width: '100%',
    maxWidth: '40em',
    margin: 'auto',
    marginTop: '3.2em',
    backgroundColor: 'white',
    padding: '4em',
    borderRadius: '1em',
  },
  Block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4em'
  },
  BlockDown: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginRight: 20
  }
};

export const CustomButton = styled(Button)`
height: '4em',
width: '4em',
font-size: 0.875rem;
background-color: #90c2fb;
border-radius: 4px;
color: white;
transition: all 150ms ease;
cursor: pointer;
border: 1px solid #6C9BCF;

&:hover {
  background-color: #007FFF};
}`;

export const CustomCancelBtn = styled(Button)`
margin-right: 1em;
width: 17em;
height: 3.2em;
background-color: #F65A83;
cursor: pointer;
border: none;
color: #ffff;
border-radius: 4px;
&:hover {
  background-color: #F65A83};
}`

export const CustomBookBtn = styled(Button)`
margin-left: 1em;
width: 17em;
height: 3.2em;
background-color: #6C9BCF;
border: none;
color: #ffff;
cursor: pointer;
border-radius: 4px;
&:hover {
  background-color: #6C9BCF};
}`