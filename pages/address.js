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

export default function Address() {
  const classes = useStyles()
  return (
    <Container maxWidth='sm' className={classes.container}>
      <TextField id='prefecture' label='prefecure' variant='outlined' />
      <TextField id='area' label='area' variant='outlined' />
      <div className={classes.buttonContainer}>
        <Button variant='contained' color='primary' href='/complete'>登録</Button>
      </div>
    </Container>
  )
}
