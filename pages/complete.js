import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center'
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Container maxWidth='sm'>
      <p className={classes.text}>登録完了</p>
    </Container>
  )
}
