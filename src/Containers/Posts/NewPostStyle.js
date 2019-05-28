import styled from 'styled-components'

const FormHolder = styled.div`
    max-width: 320px;
    margin: 0 auto;
`

const LabelField = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: #5A5A5A;
    display: block;
    margin-bottom: 6px;
`

const InputField = styled.input`
    outline: none;
    padding: 10px 18px 10px 18px;
    font-size: 14px;
    font-weight: 700;
    color: #7B55C8;
    width: 100%;
    position: relative;
    background-color: #FFF;
    border-radius: 15px;
    border: 1px solid #7B55C8;
`

const SelectHolder = styled.div`
    position: relative;
    background-color: #FFF;
    border-radius: 15px;
    display: block;
    border: 1px solid #7B55C8;

    &:after
    {
        content: '';
        display: inline-block;
        border-top: 5px solid #7B55C8;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        position: absolute;
        right: 14px;
        top: 17px;
    }
`

const SelectField = styled.select`
    padding: 10px 38px 10px 18px;
    font-size: 14px;
    font-weight: 700;
    color: #7B55C8;
    width: 100%;
    text-align: center;
    background: transparent;
`

const TextareaField = styled.textarea`
    outline: none;
    padding: 10px 18px 10px 18px;
    font-size: 14px;
    font-weight: 700;
    color: #7B55C8;
    width: 100%;
    position: relative;
    background-color: #FFF;
    border-radius: 15px;
    border: 1px solid #7B55C8;
    height: 100px;
`

const Button = styled.button`
    background-color: #7B55C8;
    font-size: 12px;
    font-weight: 600;
    color: #FFF;
    padding: 4px 15px;
    border-radius: 4px;
    border: 1px solid #7B55C8;
    transition: all .33s ease-in-out;
`

const BackButton = styled.span`
    display: inline-block;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: underline;
`

export {
    FormHolder,
    LabelField, 
    InputField, 
    SelectHolder,
    SelectField,
    TextareaField,
    Button,
    BackButton
}