import React from 'react';

//This class is our app. Inside of it, there is a list class, which is itself made of list items.
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          item: 'Baguette',
          place: 'Paris, FR',
          vote: 150,
          voted: false,
          display: true,
        },
        {
          id: 2,
          item: 'Quiche Lorraine',
          place: 'Nancy, FR',
          vote: 200,
          voted: true,
          display: true,
        },
        {
          id: 3,
          item: 'Croissant',
          place: 'London, UK',
          vote: 50,
          voted: false,
          display: true,
        },
        {
          id: 4,
          item: 'Quiche',
          place: 'NYC, USA',
          vote: 20,
          voted: false,
          display: true,
        },
        {
          id: 5,
          item: 'Quiche',
          place: 'Singapore, SGP',
          vote: 10,
          voted: false,
          display: true,
        },
        {
          id: 6,
          item: 'Croissant',
          place: 'Singapore, SGP',
          vote: 10,
          voted: false,
          display: true,
        },
        {
          id: 7,
          item: 'Quiche',
          place: 'Barcelona, SP',
          vote: 0,
          voted: false,
          display: true,
        },
        {
          id: 8,
          item: 'Quiche',
          place: 'Paris, FR',
          vote: 149,
          voted: false,
          display: true,
        },
        {
          id: 9,
          item: 'Macarons',
          place: 'Nancy, FR',
          vote: 201,
          voted: false,
          display: true,
        },
        {
          id: 10,
          item: 'Tart',
          place: 'Barcelona, SP',
          vote: 3,
          voted: false,
          display: true,
        },
      ],
      filterShow: false,
      filter: '',
    };
  }

  //show or hide the filters section
  expendFilters(event) {
    this.setState({
      items: this.state.items,
      filterShow: !this.state.filterShow,
      filter: '',
    });
  }

  //this update the state with the selected filter to order the list
  handleChange(value) {
    this.setState({
      items: this.state.items,
      filterShow: this.state.filterShow,
      filter: value,
    });
  }

  //this handle the search bar. Only products with the same name value will appear in the list
  onChange() {
    let newValue = document.getElementById('searchBar').value.toLowerCase();
    console.log(newValue);
    let newTab = this.state.items.slice();
    newTab.forEach((product) => {
      let include = product.item.toLowerCase().includes(newValue);
      include ? (product.display = true) : (product.display = false);
    });
    this.setState({
      items: newTab,
      filterShow: this.state.filterShow,
      filter: this.state.filter,
    });
  }

  //this handle the sorting of the list. I t will depend on the filter we choose.
  sortResults() {
    const filter = this.state.filter;
    let newTab = this.state.items.slice();
    if (this.state.filter === 'vote') {
      newTab.sort(function (a, b) {
        return b.vote - a.vote;
      });
    } else if (this.state.filter === 'city') {
      newTab.sort(function (a, b) {
        if (a.place < b.place) return -1;
        if (a.place > b.place) return 1;
        return 0;
      });
    } else if (this.state.filter === 'product') {
      newTab.sort(function (a, b) {
        if (a.item < b.item) return -1;
        if (a.item > b.item) return 1;
        return 0;
      });
    }
    if (filter === '') {
      this.setState({
        items: newTab,
        filterShow: this.state.filterShow,
        filter: this.state.filter,
      });
    } else {
      this.setState({
        items: newTab,
        filterShow: false,
        filter: this.state.filter,
      });
    }
  }

  //this function handles the vote. We can only vote once for a product. This will reorder the list if a filter is in the state.
  updateMark(id) {
    let newItem = this.state.items.slice();
    const index = newItem.findIndex((i) => i.id === id);
    if (newItem[index].voted) {
      newItem[index].vote -= 1;
    } else {
      newItem[index].vote += 1;
    }
    newItem[index].voted = !this.state.items[index].voted;
    this.setState({
      items: newItem,
      filterShow: this.state.filterShow,
      filter: this.state.filter,
    });
    this.sortResults();
  }

  render() {
    let filterState = 'hideFilter';
    if (this.state.filterShow) {
      filterState = 'showFilter';
    } else {
      filterState = 'hideFilter';
    }

    return (
      <div className="filterElt">
        <div id="search">
          <input
            placeholder="Search..."
            id="searchBar"
            onChange={() => this.onChange()}
          />
          <button onClick={(event) => this.expendFilters(event)}>
            <i className="fa fa-sliders" aria-hidden="true" />
          </button>
        </div>
        <div className={filterState}>
          <div className="radioFilter">
            <div>
              <input
                type="radio"
                value="product"
                id="product"
                name="filterResults"
                onChange={(event) => this.handleChange(event.target.value)}
              />
              <label htmlFor="product">Product</label>
            </div>
            <div>
              <input
                type="radio"
                value="city"
                id="city"
                name="filterResults"
                onChange={(event) => this.handleChange(event.target.value)}
              />
              <label htmlFor="city">City</label>
            </div>
            <div>
              <input
                type="radio"
                value="vote"
                id="vote"
                name="filterResults"
                onChange={(event) => this.handleChange(event.target.value)}
              />
              <label htmlFor="vote">Vote</label>
            </div>
          </div>
          <button className="okBtn" onClick={() => this.sortResults()}>
            <h2>Sort</h2>
          </button>
        </div>
        <List
          items={this.state.items}
          updateMark={(id) => this.updateMark(id)}
        />
      </div>
    );
  }
}

//This class render the whole list of products
var List = React.createClass({
  render() {
    let itemsToDisplay = this.props.items.map((i) => {
      return (
        <ListItem
          id={i.id}
          item={i.item}
          vote={i.vote}
          place={i.place}
          voted={i.voted}
          display={i.display}
          updateMark={() => this.props.updateMark(i.id)}
        />
      );
    });
    return <ul>{itemsToDisplay}</ul>;
  },
});

//This class render a component from the list
var ListItem = React.createClass({
  render() {
    return (
      <li
        id={this.props.id}
        className={this.props.display ? 'itemShow' : 'itemHide'}
      >
        <div className="itemPresentation">
          <h2>{this.props.item}</h2>
          <p>{this.props.place}</p>
        </div>
        <div className="itemDetail">
          <p>
            {this.props.vote}{' '}
            <i className="fa fa-thumbs-up" aria-hidden="true" />
          </p>
        </div>
        <button onClick={() => this.props.updateMark()}>
          {this.props.voted ? (
            <i className="fa fa-thumbs-up" aria-hidden="true" />
          ) : (
            <i className="fa fa-thumbs-o-up" aria-hidden="true" />
          )}
        </button>
      </li>
    );
  },
});

ReactDOM.render(<Filter />, document.getElementById('filter'));
