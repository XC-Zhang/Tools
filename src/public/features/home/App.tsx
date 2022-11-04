import { Container, createTheme, CssBaseline, List, ListItem, Paper, ThemeProvider, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import "./app.styles.less";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    }
});

export function App() {
    return (<ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Container>
            <Typography variant="h1">工具箱</Typography>
            <List>
                <ListItem>
                    <Paper component="a" href="image-base64">
                        <Typography component="h2" variant="h5">图片 base64 转码</Typography>
                        <Typography variant="body2">将 base64 编码的字符串转换为图片</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper component="a" href="string-escaping">
                        <Typography component="h2" variant="h5">字符串转义</Typography>
                        <Typography variant="body2">将字符串转义或反转义</Typography>
                    </Paper>
                </ListItem>
                <ListItem>
                    <Paper component="a" href="json-parsing">
                        <Typography component="h2" variant="h5">JSON 解析</Typography>
                        <Typography variant="body2">将字符串解析为 JSON 元素</Typography>
                    </Paper>
                </ListItem>
            </List>
        </Container>
    </ThemeProvider>);
}
