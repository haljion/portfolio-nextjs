import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/sidebar'
// import PageTitle from "components/pageTitle";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'

const AboutMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>about me</title>
      </Head>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Container maxWidth="sm">
            <Box
              fontSize="3rem"
              textAlign="center"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'secondary.contrastText',
              }}
            >
              ABOUT ME
            </Box>

            <Card>
              <CardContent>
                <Typography>
                  <p>名前 ⾼橋 悠治(タカハシ ユウジ)</p>
                  <p>年齢 26歳(1996年⽣まれ)</p>
                  <p>エンジニア経験年数 3年9ヵ⽉ (2023/01 時点)</p>
                  <p>GitHub @haljion</p>
                  <p>Qiita @haljion</p>
                  <p>Kaggle</p>
                  <p>資格</p>
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutMe
