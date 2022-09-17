import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Container } from '@mui/system'
import Widget from '../components/widget/Widget'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestionAction } from '../redux/actions/questionAction'
import Questions from '../components/Question/Questions'

const Questionpage = () => {
  const dispatch = useDispatch();
  const questionList = useSelector(state => state.questionReducer)
  useEffect(() => {
    dispatch(getAllQuestionAction())
  }, [dispatch])
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={7}>
          <Questions questionHead={"All Questions"} questionList={questionList}/>
        </Grid>
        <Grid item md={3}>
          <Widget />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Questionpage