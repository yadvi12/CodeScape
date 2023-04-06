import { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    background-color: white;
    height: 50vh;
    display: flex;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor
                language="xml"
                languageName="HTML"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor
                language="css"
                languageName="CSS"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor
                language="javascript"
                languageName="JS"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>
    )
}

export default Code;