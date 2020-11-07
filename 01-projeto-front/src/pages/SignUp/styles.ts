import  styled  from 'styled-components'
import { shade } from 'polished'
import signUpBackground from '../../assets/image.png'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    justify-content: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin: 20px;   
    
    width: 100%;
    max-width: 700px;
   
    form{
        margin: 5y0px 0;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }
       
        a{
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }
    }

    > a { /* a's diretamente dentro do content */
         color: #f4ede8;
         display: block;
         margin-top: 24px;
         text-decoration: none;
         transition: color 0.2s;

         display: flex;
         align-items: center;

         svg{
            margin-right: 16px;
         }

         &:hover {
            color: ${shade(0.2, '#ff9000')};
         }
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackground}) no-repeat center;
    background-size: cover;
`