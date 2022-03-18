import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'

import Link from 'next/link'

const options = [
  {
    title: 'Whitepaper',
    link:
      'https://humble-penalty-bba.notion.site/Opportunity-de5af9fb928f47288055c6c4ac2064ec',
  },
  {
    title: 'Discord',
    link: 'https://discord.gg/pBRVWTQPvS',
  },
  {
    title: 'Github',
    link: 'https://github.com/OpportunityProtocol/opportunity-core',
  },
  {
    title: 'FAQ',
    link: '/faq',
  },
]

const ITEM_HEIGHT = 48

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: '#212121' }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <Link href={option.link}>
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
            >
              {option.title}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  )
}
