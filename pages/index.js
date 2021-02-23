import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  buttonContainer: {
    margin: '40px 0 0',
    textAlign: 'center'
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Container maxWidth='sm' className={classes.container}>
      <TextField id='lastName' label='last name' variant='outlined' />
      <TextField id='firstName' label='first name' variant='outlined' />
      <div className={classes.buttonContainer}>
        <Button variant='contained' color='primary' href='/age'>次へ</Button>
      </div>
    </Container>
  )
}
