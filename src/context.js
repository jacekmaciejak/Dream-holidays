import React, { Component } from "react";
import items from "./data";
import articleItems from './articles'

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    vacationSpot: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    articles: [],
    featuredArticles: [],

  };
  //getData
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let vacationSpot = rooms.filter(room => room.country === true)
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let articles = this.formatArticlesData(articleItems);
    let featuredArticles = articles.filter(article => article.featured === true)
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      vacationSpot,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
      articles,
      featuredArticles,
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }


  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  formatArticlesData(articleItems) {
    let tempArticles = articleItems.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let article = { ...item.fields, images,id }
      return article;
    });
    return tempArticles;
  }
  getArticle = address => {
    let tempArticles = [...this.state.articles];
    const article = tempArticles.find(article => article.address === address);
    return article;
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    },
      this.filterRooms
    )
  }
  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;
    //all the rooms
    let tempRooms = [...rooms]
    //transform values
    capacity = parseInt(capacity)
    price = parseInt(price)
    //filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }
    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price)
    //filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }

    //change state
    this.setState({
      sortedRooms: tempRooms
    })

  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange, getArticle: this.getArticle }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer>
      {value => <Component {...props} context={value} />}
    </RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext };


//-----------------------------------
//-----------------------------------
//-------------ARTICLES--------------
//-----------------------------------
//-----------------------------------

// const ArticleContext = React.createContext();


// class ArticleProvider extends Component {
//   state = {
//     articles: [],
//     featuredArticles: [],
//     loading: true,
//   }

//   //getData
//   componentDidMount() {
//     let articles = this.formatArticlesData(articleItems);
//     let featuredArticles = articles.filter(article => article.featured === true)
//     this.setState({
//       articles,
//       featuredArticles,
//       loading: false,

//     });
//   }

//   formatArticlesData(articleItems) {
//     let tempArticles = articleItems.map(item => {
//       let id = item.sys.id;
//       let article = { ...item.fields, id }
//       return article;
//     });
//     return tempArticles;
//   }
//   getArticle = address => {
//     let tempArticles = [...this.state.articles];
//     const article = tempArticles.find(article => article.address === address);
//     return article;
//   }

//   render() {
//     return (
//       <ArticleContext.Provider value={{ ...this.state, getArticle: this.getArticle }}>
//         {this.props.children}
//       </ArticleContext.Provider>
//     );
//   }
// }
// const ArticleConsumer = ArticleContext.Consumer;

// export function withArticleConsumer(Component) {
//   return function ConsumerWrapper(props) {
//     return <ArticleConsumer>
//       {value => <Component {...props} context={value} />}
//     </ArticleConsumer>
//   }
// }

// export { ArticleProvider, ArticleConsumer, ArticleContext };