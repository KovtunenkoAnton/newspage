import React from 'react';
import styles from '../styles/Home.module.css';
import { Box, Typography, List, Dialog} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const Card = ({ news }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let dateStr = '';
  if (news.updated) {
    const ms = new Date(news.updated);
    dateStr = `Обновлено ${ms.getDate()}.${ms.getMonth()}.${ms.getFullYear()}`
  } else {
    const ms = new Date(news.created);
    dateStr = `Создано ${ms.getDate()}.${ms.getMonth()}.${ms.getFullYear()}`
  }

  const location = `${news.country}${news.city && ','} ${news.city && news.city}`
  
  return(
    <>
      <div>
        <div className={styles.cardBody}>
          <div className={styles.cardTextLocation}>{location}</div>
          <div>{news.title}</div>
          <div onClick={handleOpen} className={styles.cardTextLinkToModal}>ПОСМОТРЕТЬ</div>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <List 
              sx={{
                width: '600px',
                height: '780px',
                borderRadius: '0px',
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 0px 40px 40px',
                backgroundColor: '#E5E5E5'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ backgroundColor: '#2B8580', color: '#E5E5E5', padding: '4px' }}>
                  {news.application}
                </Box>
                <Box sx={{ paddingRight: '40px'}}>
                  <ClearIcon onClick={handleClose} />
                </Box>
              </Box>

              <Box sx={{ marginTop: '24px', color: '#888888'}}>
                {location}
              </Box>

              <Box sx={{ display: 'flex', padding: '40px', backgroundColor: '#2B8580', marginLeft: '-40px', marginTop: '24px' }}>
                <Box>
                  <Box sx={{ color: '#fff', textTransform: 'uppercase' }}>Объект внедрения</Box>
                  <Box sx={{ color: '#fff', marginTop: '8px' }}>{news.object ? news.object : ''}</Box>
                </Box>
                <Box sx={{ margin: '0px 10px' }}>
                  <Box sx={{ color: '#fff', textTransform: 'uppercase' }}>Применяемое решение</Box>
                  <Box sx={{ color: '#fff', marginTop: '8px' }}>{news.solution?.description ? news.solution?.description : ''}</Box>
                </Box>
                <Box sx={{ margin: '0px 2px' }}>
                  <Box sx={{ color: '#fff', textTransform: 'uppercase' }}>Разработчик</Box>
                  <Box sx={{ color: '#fff', marginTop: '8px' }}>{news.developer ? news.developer : ''}</Box>
                </Box>
              </Box>

              <Typography sx={{ marginTop: '24px', fontWeight: 'bold', textTransform: 'uppercase' }}>Описание</Typography>

              <Typography sx={{ marginTop: '8px', marginRight: '40px' }}>{news.description.replaceAll("<p>", " ").replaceAll("</p>", " ")}</Typography>

            </List >
          </Dialog>

        </div>
        <div className={styles.cardDate}>{dateStr}</div>
      </div>
    </>
  )
}

export default Card;