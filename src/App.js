import React, {Component} from "react"
import './App.css'

class App extends Component{

state = {
  n1: '',
  n2: '',
  result: ''
}


handleChange1 = (e)=>{
  this.setState({
    n1:Number(e.target.value)
  })

}

handleChange2 = (e) => {
  this.setState({
    n2:Number(e.target.value)
  })
}


divisao = () => {
  const {n1,n2} = this.state
  if (n1 && n2 !== ""){
    this.setState({
      result: n1 / n2
    })
  }else {
    this.setState({
      result:'nenhum valor encontrado'
    })
  }
}


produto = () => {
  const {n1,n2} = this.state
  if (n1 && n2 !== ""){
    this.setState({
      result: n1 * n2
    })
  }else {
    this.setState({
      result:'nenhum valor encontrado'
    })
  }
}

subtracao = () => {
  const {n1, n2} = this.state
  if (n1 && n2 !== ""){
    this.setState({
      res: n1 - n2
    })
  } else {
    this.setState({
      res: "Nenhum valor foi digitado."
    })
  }
}




clear = () => {
  const {n1, n2} = this.state
  if (n1 && n2 !== ""){
    this.setState({
      res: null,
      n1: 0,
      n2: 0
    })
  } else {
    this.setState({
      res: "Nenhum valor foi digitado."
    })
  }
}

  soma = () => {
    const {n1, n2} = this.state
    if (n1 && n2 !== ""){
      this.setState({
        res: n1 + n2
      })
    } else {
      this.setState({
        res: "Nenhum valor foi digitado."
      })
    }
  }

render(){
    return(
      <div className="container">
        <h1>React App Calculadora</h1>
        <h2>{this.state.res}</h2>
       <div className="entradas">
       <input value={this.state.n1} type="number" onChange={this.handleChange1}></input>
       <input value={this.state.n2} type="number" onChange={this.handleChange2}></input>
       </div>
       
      <div className="button">
        <button onClick={this.soma}>+</button>
        <button onClick={this.divisao}>/</button>
        <button onClick={this.subtracao}>-</button>
        <button onClick={this.produto}>*</button>
        <button onClick={this.clear}>C</button>
      </div>     
      </div>
    )
  }
}

export default App
