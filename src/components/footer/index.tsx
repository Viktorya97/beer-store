import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import './styles.scss'

function Footer() {
  return (
    <Box id='footer'>
      <Container>
        <Grid container justifyContent='space-between' className='content'>
          <Grid item xs={12} md={8}>
            <Grid container spacing={{ xs: 8, md: 12 }}>
              <Grid item className='footer-list'>
                <p className='title'>Useful</p>
                <ul className='list-items'>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Shop</a>
                  </li>
                  <li>
                    <a href='#'>Our story</a>
                  </li>
                  <li>
                    <a href='#'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                </ul>
              </Grid>
              <Grid item className='footer-list'>
                <p className='title'>Help</p>
                <ul className='list-items'>
                  <li>
                    <a href='#'>Customer service</a>
                  </li>
                  <li>
                    <a href='#'>Find our beer</a>
                  </li>
                  <li>
                    <a href='#'>Recent order</a>
                  </li>
                  <li>
                    <a href='#'>Contact</a>
                  </li>
                  <li>
                    <a href='#'>Terms & Privacy</a>
                  </li>
                </ul>
              </Grid>
              <Grid item className='footer-list'>
                <p className='title'>Shop</p>
                <ul className='list-items'>
                  <li>
                    <a href='#'>Pale ale</a>
                  </li>
                  <li>
                    <a href='#'>Golden ale</a>
                  </li>
                  <li>
                    <a href='#'>Dark ale</a>
                  </li>
                  <li>
                    <a href='#'>IPA</a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container width='100%'>
              <Grid item className='contact-detail'>
                <p className='title'>OUR INFORMATION</p>
                <Box>
                  <Box className='info-row'>
                    <Box className='detail'>
                      <Box className='icon-box'>
                        <LocationOnIcon />
                      </Box>
                      <Box>
                        <p className='info-text'>94 River Road, London, United Kingdom</p>
                      </Box>
                    </Box>
                    <Box className='icon-box'>
                      <InstagramIcon />
                    </Box>
                  </Box>
                  <Box className='info-row'>
                    <Box className='detail'>
                      <Box className='icon-box'>
                        <EmailIcon />
                      </Box>
                      <Box>
                        <p className='info-text'>sales@craftbeer-nation.com</p>
                      </Box>
                    </Box>
                    <Box className='icon-box'>
                      <FacebookIcon />
                    </Box>
                  </Box>
                  <Box className='info-row'>
                    <Box className='detail'>
                      <Box className='icon-box'>
                        <LocalPhoneIcon />
                      </Box>
                      <Box>
                        <p className='info-text'>(0)203 123 4567</p>
                      </Box>
                    </Box>
                    <Box className='icon-box'>
                      <TwitterIcon />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <p className='copyWrite-text'>
          2016 © Craft Beer Nation / <span> Web design by Klever media</span>
        </p>
      </Container>
    </Box>
  )
}

export default Footer
