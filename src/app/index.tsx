import { Box, Button, Container, Typography } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from './components/sidebar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOMEa</title>
      </Head>

      <Container maxWidth="sm">
        <Typography>haljion's portfolio</Typography>
        <Link href="/aboutme" as="/aboutme">
          <Button variant="contained" color="secondary" endIcon={<ArrowCircleRightIcon />}>
            MORE ABOUT ME!
          </Button>
        </Link>
      </Container>
    </>
  )
}

export default Home
