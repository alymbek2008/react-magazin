import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[
        {
          id:1,
          title:'rjjflk',
          img:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
          desc:'rjrk',
          category: 'rlklk',
          price: '4933.99'
        },
        {
          id:2,
          title:'rjjflk',
          img:'https://wallpaper.forfun.com/fetch/5a/5a1990d39181006d97036d8ba802b48a.jpeg',
          desc:'rjrk',
          category: 'rlklk',
          price: '239.99'
        },
        {
          id:3,
          title:'rjjflk',
          img:'https://img.freepik.com/free-vector/tropical-leaves-background-zoom_23-2148580778.jpg',
          desc:'rjrk',
          category: 'rlklk',
          price: '2344499'
        },
        {
          id:4,
          title:'тооо',
          img:'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          desc:'rjrk',
          category: 'rlklk',
          price: '395.99'
        },
        {
          id:5,
          title:'rjjflk',
          img:'https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?cs=srgb&dl=pexels-eberhardgross-640781.jpg&fm=jpg',
          desc:'rjrk',
          category: 'rlklk',
          price: '395.99'
        },
      ]
    }

  }
  render() {
  return (
    <div className="wrapper">
      <Header/>
      <Items items={this.state.items}/>
      <Footer/>
    </div>
  )
}
}

export default App;
