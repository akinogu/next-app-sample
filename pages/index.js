import { useState } from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  buttonContainer: {
    margin: '40px 0 0',
    textAlign: 'center'
  }
}))

export default function Home() {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const classes = useStyles()
  return (
    <Container maxWidth='sm' className={classes.container}>
      <TextField
        id='lastName'
        label='last name'
        variant='outlined'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        id='firstName'
        label='first name'
        variant='outlined'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}c
      />
      <div className={classes.buttonContainer}>
        <Button
          variant='contained'
          color='primary'
          href='/age'
          disabled={!lastName && !firstName}
        >
          次へ
        </Button>
      </div>
    </Container>
  )
}
