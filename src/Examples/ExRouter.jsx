import React from 'react'
import {Route,Switch} from 'react-router-dom'
import MyAccordion from './MyAccordion';
import NewBR from './NewBR';
const ExRouter = () =>{
  return<>
      <Switch>
        <Route exact path='/' component={MyAccordion}/>
        <Route exact path='/NewBr' component={NewBR}/>
      </Switch>
  </>
}

export default ExRouter;
