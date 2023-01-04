import React from 'react'
import Drawer from '@mui/material/Drawer'
import { Box, Button, TextField } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Stack from '@mui/material/Stack'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'
import './styles.scss'

interface FilterDrawerProps {
  isOpenFilterDrawer: boolean
  toggleDrawer: Function
  setBeforeDate: Function
  beforeDate: Dayjs | null
  setAfterDate: Function
  afterDate: Dayjs | null
  handleFilter: Function
}

function FilterDrawer(props: FilterDrawerProps) {
  const {
    isOpenFilterDrawer,
    toggleDrawer,
    setBeforeDate,
    beforeDate,
    afterDate,
    setAfterDate,
    handleFilter,
  } = props

  return (
    <Drawer anchor={'right'} open={isOpenFilterDrawer} onClose={() => toggleDrawer()}>
      <Box className='drawer-content'>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                disableFuture
                label='Before'
                openTo='year'
                views={['year', 'month']}
                value={beforeDate}
                onChange={(newValue) => {
                  setBeforeDate(newValue)
                }}
                renderInput={(params) => <TextField {...params} name='beforeDate' />}
              />
              <DatePicker
                disableFuture
                label='After'
                openTo='year'
                views={['year', 'month']}
                value={afterDate}
                onChange={(newValue) => {
                  setAfterDate(newValue)
                }}
                renderInput={(params) => <TextField {...params} name='afterDate' />}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
        <Box>
          <Button variant='contained' fullWidth onClick={() => handleFilter()}>
            Save
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default FilterDrawer
